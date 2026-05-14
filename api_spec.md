# Specification: NArFU Timetable & Integration API (Fake API)

## 1. Overview
This API acts as a middle-layer (proxy) between the legacy NArFU Ruz systems and the T2 Super-App. It provides structured JSON data for the timetable, integrates deep links to the Sakai LMS, and supports a notification mechanism for schedule changes.

**Base URL:** `https://api.t2-narfu.edu/v1`

---

## 2. Authentication
Authorization is handled via the T2 Unified Student Profile.
*   **Header:** `Authorization: Bearer <t2_student_token>`

---

## 3. Endpoints

### 3.1 Get Student Timetable
Returns the current week's timetable for the authorized student's group.

*   **Endpoint:** `GET /timetable/current`
*   **Query Params:**
    *   `days`: (optional) Number of days to return (default: 7).
*   **Response:**
```json
{
  "group": {
    "id": 19652,
    "name": "151318",
    "faculty": "ВШИТиАС"
  },
  "last_updated": "2026-05-14T10:31:00Z",
  "schedule": [
    {
      "date": "2026-05-14",
      "day_of_week": "Thursday",
      "lessons": [
        {
          "id": "lesson_1024_1",
          "number": 1,
          "time_start": "08:20",
          "time_end": "09:55",
          "type": "Практическое занятие",
          "subject": "Производственная практика, проектно-технологическая практика",
          "teacher": {
            "name": "Васендина И.С.",
            "profile_url": "https://ruz.narfu.ru/?lecturer=12345"
          },
          "location": {
            "auditorium": "1024",
            "building": "наб. Северной Двины, д. 2, корп. 2",
            "geo": {"lat": 64.534, "lng": 40.528}
          },
          "sakai_link": "https://sakai.narfu.ru/portal/site/course-151318-practice",
          "is_changed": false
        }
      ]
    }
  ]
}
```

### 3.2 Check for Updates (Polling for Notifications)
Used by the T2 backend to detect changes and push notifications.

*   **Endpoint:** `GET /timetable/check-updates`
*   **Response:**
```json
{
  "has_updates": true,
  "changes": [
    {
      "type": "REPLACEMENT",
      "date": "2026-05-16",
      "lesson_number": 3,
      "old_subject": "Машинное обучение (Лекция)",
      "new_subject": "Машинное обучение (Лабораторная работа)",
      "message": "Лекция заменена на лабораторную работу в ауд. 42"
    }
  ]
}
```

### 3.3 Search
Search for groups, teachers, or rooms.

*   **Endpoint:** `GET /search`
*   **Query Params:** `q=151318`
*   **Response:**
```json
{
  "results": [
    {"type": "group", "id": 19652, "title": "Группа 151318"},
    {"type": "teacher", "id": 543, "title": "Васендина Ирина Сергеевна"}
  ]
}
```

---

## 4. Sakai Integration Logic
Since the legacy `ruz.narfu.ru` does not contain Sakai links, the API performs a **Mapping Service** task:
1.  API matches the `subject` and `group_id` with the Sakai database.
2.  Injects a `sakai_link` field into each lesson object.
3.  Allows the T2 App to implement a "Join Lesson" or "View Materials" button that opens Sakai in one click.

---

## 5. Implementation Strategy (Fake API)
For the prototype phase, the "Fake API" will be implemented using:
*   **Static Mock Server:** JSON files served via Node.js/Express.
*   **Data Scraper:** A background worker that scrapes `ruz.narfu.ru` every 15 minutes to simulate "real-time" data.
*   **Manual Trigger:** A developer-only endpoint to manually toggle `is_changed` status for testing push notifications in the UI.

---

## 6. Zero-Rating (T2 Integration)
The API and all linked domains (`sakai.narfu.ru`, `ruz.narfu.ru`, `api.t2-narfu.edu`) will be whitelisted in the T2 billing system to ensure **zero-traffic consumption** for students on the special "NArFU Connect" tariff.
