import React from 'react';
import { mockUser, mockTimetable, mockAnnouncements } from '../data/mockData';
import { Bell, CreditCard, Clock, MessageSquare } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="welcome-text">Привет, {mockUser.name}!</p>
          <p className="sub-text">Группа {mockUser.group}</p>
        </div>
        <div className="notification-icon">
          <Bell size={24} color="#ff0055" />
        </div>
      </header>

      <div className="widget balance-widget">
        <div className="widget-header">
          <CreditCard size={20} />
          <span>Мой Баланс</span>
        </div>
        <p className="balance-amount">{mockUser.balance}</p>
        <p className="tariff-name">{mockUser.tariff}</p>
        <div className="zero-rating-badge">Безлимит на САФУ</div>
      </div>

      <section className="dashboard-section">
        <h3>Далее по расписанию</h3>
        <div className="next-lesson-card">
          <div className="lesson-time">
            <Clock size={16} />
            <span>{mockTimetable[0].time}</span>
          </div>
          <p className="lesson-subject">{mockTimetable[0].subject}</p>
          <p className="lesson-info">{mockTimetable[0].type} • {mockTimetable[0].location}</p>
        </div>
      </section>

      <section className="dashboard-section">
        <h3>Объявления САФУ</h3>
        <div className="announcements-list">
          {mockAnnouncements.map(ann => (
            <div key={ann.id} className="announcement-item">
              <MessageSquare size={16} className="ann-icon" />
              <div className="ann-content">
                <p className="ann-title">{ann.title}</p>
                <p className="ann-date">{ann.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
