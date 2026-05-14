export const mockTimetable = [
  {
    id: 1,
    time: "08:20–09:55",
    type: "Практическое занятие",
    subject: "Производственная практика",
    teacher: "Васендина И.С.",
    location: "ауд.1024",
    sakaiId: "practice-1024"
  },
  {
    id: 2,
    time: "10:10–11:45",
    type: "Лекция",
    subject: "Создание и внедрение моделей МО",
    teacher: "Васендина И.С.",
    location: "ауд.46",
    sakaiId: "ml-models"
  },
  {
    id: 3,
    time: "12:00–13:35",
    type: "Лекция",
    subject: "Создание и внедрение моделей МО",
    teacher: "Васендина И.С.",
    location: "ауд.46",
    sakaiId: "ml-models"
  }
];

export const mockAnnouncements = [
  {
    id: 1,
    title: "ДЕНЬ ЗДОРОВЬЯ САФУ",
    date: "16.05.2026",
    content: "Ждем всех на стадионе «Буревестник»"
  },
  {
    id: 2,
    title: "Пересдачи у Деменкова М.Е.",
    date: "15.05.2026",
    content: "Информация о времени проведения доступна в Sakai"
  }
];

export const mockUser = {
  name: "Егор",
  group: "151318",
  balance: "450.00 ₽",
  tariff: "T2 NArFU Connect",
  trafficLeft: "Безлимит на САФУ"
};

export const mockSakaiCourses = [
  {
    id: "ml-models",
    title: "Создание и внедрение моделей МО",
    unread: 3,
    instructor: "Васендина И.С."
  },
  {
    id: "practice-1024",
    title: "Производственная практика",
    unread: 0,
    instructor: "Васендина И.С."
  },
  {
    id: "startups",
    title: "Стартапы",
    unread: 5,
    instructor: "Бугаенко О.Д."
  }
];

export const mockAssignments = [
  {
    id: 1,
    courseId: "ml-models",
    title: "Лабораторная работа №3: Нейросети",
    dueDate: "20.05.2026",
    status: "В процессе"
  },
  {
    id: 2,
    courseId: "ml-models",
    title: "Тест: Основы глубокого обучения",
    dueDate: "15.05.2026",
    status: "Не сдано"
  },
  {
    id: 3,
    courseId: "startups",
    title: "Презентация бизнес-плана",
    dueDate: "25.05.2026",
    status: "Сдано"
  }
];
