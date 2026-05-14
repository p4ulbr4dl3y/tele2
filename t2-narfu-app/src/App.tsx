import React, { useState } from 'react';
import { Home, Calendar, BookOpen, User, BellRing } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Dashboard from './components/Dashboard';
import Timetable from './components/Timetable';
import SakaiView from './components/SakaiView';
import CourseDetail from './components/CourseDetail';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [notification, setNotification] = useState<{title: string, msg: string} | null>(null);

  const handleJoinSakai = (id: string) => {
    setSelectedCourseId(id);
    setActiveTab('sakai');
  };

  const handleBackToCourses = () => {
    setSelectedCourseId(null);
  };

  const triggerSimulation = () => {
    setNotification({
      title: "Изменение в расписании!",
      msg: "Лекция по МО (10:10) перенесена в ауд. 1023"
    });
    setTimeout(() => setNotification(null), 5000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'schedule':
        return <Timetable onJoinSakai={handleJoinSakai} />;
      case 'sakai':
        if (selectedCourseId) {
          return <CourseDetail courseId={selectedCourseId} onBack={handleBackToCourses} />;
        }
        return <SakaiView onSelectCourse={(id) => setSelectedCourseId(id)} />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="notification-toast"
            onClick={() => setNotification(null)}
          >
            <BellRing size={24} />
            <div className="toast-content">
              <h4>{notification.title}</h4>
              <p>{notification.msg}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main-content">
        {renderContent()}
        
        {activeTab === 'home' && (
          <button className="sim-trigger" onClick={triggerSimulation}>
            Симулировать изменение
          </button>
        )}
      </main>

      <nav className="bottom-nav">
        <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <Home size={24} />
          <span>Главная</span>
        </button>
        <button className={`nav-item ${activeTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveTab('schedule')}>
          <Calendar size={24} />
          <span>Расписание</span>
        </button>
        <button className={`nav-item ${activeTab === 'sakai' ? 'active' : ''}`} onClick={() => setActiveTab('sakai')}>
          <BookOpen size={24} />
          <span>Sakai</span>
        </button>
        <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
          <User size={24} />
          <span>Профиль</span>
        </button>
      </nav>
    </div>
  );
}

export default App;
