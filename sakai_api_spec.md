# Specification: Sakai LMS Integration API (Entity Broker)

## 1. Introduction
The Sakai LMS at NArFU uses the **Entity Broker** system to expose RESTful services. This specification defines the integration path for the T2 Super-App to fetch academic data, course materials, and student progress.

**Base URL:** `https://sakai.narfu.ru/direct`

---

## 2. Authentication Strategy (SSO)
To fulfill the "one-click" requirement, the system uses **Single Sign-On (SSO)**.
*   **Method:** LTI Advantage (LTI 1.3) or OAuth2 Proxy.
*   **Workflow:** T2 Unified Profile generates a secure session token -> Proved to Sakai via `JSESSIONID` cookie or `Authorization` header.
*   **Token Type:** `Bearer <secure_lti_token>`

---

## 3. Core Entities & Endpoints

### 3.1 User Profile
Fetch basic information about the authorized student.
*   **Endpoint:** `GET /user/current.json`
*   **Key Fields:** `id`, `displayName`, `email`.

### 3.2 Academic Courses (Sites)
Get a list of all active courses for the student.
*   **Endpoint:** `GET /site.json`
*   **Response Structure:**
```json
{
  "site_collection": [
    {
      "id": "course-151318-ml",
      "title": "Создание и внедрение моделей машинного обучения",
      "description": "Модуль проф. подготовки для группы 151318",
      "siteUrl": "https://sakai.narfu.ru/portal/site/course-151318-ml"
    }
  ]
}
```

### 3.3 Assignments & Deadlines
Fetch upcoming tasks and their status.
*   **Endpoint:** `GET /assignment/my.json` (or `/assignment/site/{site_id}.json`)
*   **Key Fields:** `title`, `dueTime`, `status` (submitted/not-submitted).

### 3.4 Announcements
Aggregate important messages from instructors.
*   **Endpoint:** `GET /announcement/user.json?n=10`
*   **Purpose:** Triggers push notifications in the T2 App when a new announcement is posted.

### 3.5 Gradebook
Access current grades for the "Student Gradebook" feature.
*   **Endpoint:** `GET /gradebook/site/{site_id}.json`

---

## 4. Feature Integration Logic

### 4.1 "One-Click" Access
The T2 App UI renders a "Go to Course" button using the `siteUrl` property. If the user is authenticated via SSO, the link opens the internal browser directly on the course page.

### 4.2 Deadlines Widget
The app polls `/assignment/my.json` to show a "Coming Up" widget on the dashboard, sorted by `dueTime`.

### 4.3 Notification Engine
The T2 backend periodically checks `/announcement/user.json`. Any new entry with a timestamp later than `last_check` triggers a push notification:
*   **Title:** New Announcement in [Course Name]
*   **Body:** [Announcement Title] - Click to read more.

---

## 5. Development/Mocking
For the "Fake API" prototype, these endpoints will be mirrored in the `api.t2-narfu.edu` proxy to demonstrate data flow without requiring a live VPN connection to the university's internal network.
