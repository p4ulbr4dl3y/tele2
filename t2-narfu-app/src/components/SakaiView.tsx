import React, { useState, useEffect } from 'react';
import { mockSakaiCourses, mockAssignments } from '../data/mockData';
import { Book, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SakaiView = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="sakai-loading">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="loading-content"
        >
          <Loader2 className="spinner" size={48} />
          <h2>Вход в Sakai...</h2>
          <p>Единый профиль Т2 подтвержден</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="sakai-page">
      <div className="sakai-header">
        <h1>Sakai LMS</h1>
        <div className="sakai-badge">Подключено</div>
      </div>

      <section className="sakai-section">
        <h3>Мои курсы</h3>
        <div className="courses-grid">
          {mockSakaiCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-icon">
                <Book size={20} />
                {course.unread > 0 && <span className="unread-dot">{course.unread}</span>}
              </div>
              <p className="course-title">{course.title}</p>
              <p className="course-instructor">{course.instructor}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sakai-section">
        <h3>Ближайшие дедлайны</h3>
        <div className="assignments-list">
          {mockAssignments.map(ass => (
            <div key={ass.id} className="assignment-card">
              <div className="ass-status-icon">
                {ass.status === 'Сдано' ? <CheckCircle size={20} color="#00ff88" /> : <AlertCircle size={20} color="#ffaa00" />}
              </div>
              <div className="ass-info">
                <p className="ass-title">{ass.title}</p>
                <div className="ass-meta">
                  <span>До {ass.dueDate}</span>
                  <span className={`status-tag ${ass.status === 'Сдано' ? 'done' : 'pending'}`}>{ass.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SakaiView;
