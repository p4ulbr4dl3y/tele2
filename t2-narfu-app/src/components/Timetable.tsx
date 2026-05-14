import React from 'react';
import { mockTimetable } from '../data/mockData';
import { MapPin, User, ExternalLink } from 'lucide-react';

const Timetable = ({ onJoinSakai }: { onJoinSakai: (id: string) => void }) => {
  return (
    <div className="timetable-page">
      <div className="timetable-header">
        <h1>Расписание</h1>
        <p className="timetable-date">Четверг, 14 мая</p>
      </div>

      <div className="lessons-list">
        {mockTimetable.map((lesson) => (
          <div key={lesson.id} className="lesson-card">
            <div className="lesson-card-header">
              <span className="lesson-number">{lesson.id} пара</span>
              <span className="lesson-time-range">{lesson.time}</span>
            </div>
            
            <h2 className="lesson-title">{lesson.subject}</h2>
            <p className="lesson-type">{lesson.type}</p>
            
            <div className="lesson-details">
              <div className="detail-item">
                <User size={14} />
                <span>{lesson.teacher}</span>
              </div>
              <div className="detail-item">
                <MapPin size={14} />
                <span>{lesson.location}</span>
              </div>
            </div>

            <button 
              className="sakai-join-btn"
              onClick={() => onJoinSakai(lesson.sakaiId)}
            >
              <span>Открыть в Sakai</span>
              <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
