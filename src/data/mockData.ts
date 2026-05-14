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

export const mockCourseDetails = {
  "practice-1024": {
    description: "Целью производственной практики является получение профессиональных умений и опыта профессиональной деятельности в области разработки и внедрения информационных систем.",
    resources: [
      { id: "r1", title: "Программа практики.pdf", type: "pdf", size: "2.4 MB" },
      { id: "r2", title: "Шаблон отчета.docx", type: "doc", size: "450 KB" },
      { id: "r3", title: "Дневник практики.pdf", type: "pdf", size: "1.1 MB" }
    ],
    detailedAssignments: [
      { id: "da1", title: "Установочная конференция", status: "Сдано", dueDate: "01.05.2026" },
      { id: "da2", title: "Промежуточный отчет №1", status: "Проверено", dueDate: "10.05.2026" },
      { id: "da3", title: "Финальный отчет", status: "В процессе", dueDate: "30.06.2026" }
    ]
  }
};
