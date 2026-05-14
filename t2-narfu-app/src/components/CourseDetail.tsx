import React from 'react';
import { mockSakaiCourses, mockCourseDetails } from '../data/mockData';
import { ArrowLeft, FileText, CheckCircle, Clock, ExternalLink, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseDetailProps {
  courseId: string;
  onBack: () => void;
}

const CourseDetail = ({ courseId, onBack }: CourseDetailProps) => {
  const course = mockSakaiCourses.find(c => c.id === courseId);
  const details = (mockCourseDetails as any)[courseId];

  if (!course || !details) {
    return (
      <div className="course-detail-error">
        <button onClick={onBack} className="back-btn"><ArrowLeft size={20} /> Назад</button>
        <p>Информация о курсе не найдена</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="course-detail-page"
    >
      <header className="detail-header">
        <button onClick={onBack} className="back-btn"><ArrowLeft size={20} /></button>
        <div className="header-text">
          <h1>{course.title}</h1>
          <p>{course.instructor}</p>
        </div>
      </header>

      <section className="detail-section">
        <h3>О курсе</h3>
        <p className="course-desc">{details.description}</p>
      </section>

      <section className="detail-section">
        <h3>Материалы</h3>
        <div className="resources-list">
          {details.resources.map((res: any) => (
            <div key={res.id} className="resource-item">
              <div className="res-icon">
                <FileText size={20} color="#ff0055" />
              </div>
              <div className="res-info">
                <p className="res-title">{res.title}</p>
                <p className="res-size">{res.size}</p>
              </div>
              <Download size={18} className="download-icon" />
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <h3>Задания</h3>
        <div className="detailed-assignments">
          {details.detailedAssignments.map((ass: any) => (
            <div key={ass.id} className="det-ass-card">
              <div className="det-ass-header">
                <p className="det-ass-title">{ass.title}</p>
                <span className={`status-badge ${ass.status === 'Сдано' || ass.status === 'Проверено' ? 'done' : 'process'}`}>
                  {ass.status}
                </span>
              </div>
              <div className="det-ass-footer">
                <Clock size={14} />
                <span>До {ass.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className="open-browser-btn">
        <span>Открыть в браузере</span>
        <ExternalLink size={18} />
      </button>
    </motion.div>
  );
};

export default CourseDetail;
