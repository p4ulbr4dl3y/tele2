import React from 'react';
import { mockUser } from '../data/mockData';
import { Smartphone, Zap, ShieldCheck, ChevronRight, Settings, Info } from 'lucide-react';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">{mockUser.name[0]}</div>
        <h2>{mockUser.name}</h2>
        <p>+7 (9xx) xxx-xx-xx</p>
      </div>

      <div className="tariff-card">
        <div className="tariff-info">
          <Zap size={24} color="#ff0055" />
          <div>
            <h3>{mockUser.tariff}</h3>
            <p>Эксклюзивный тариф САФУ</p>
          </div>
        </div>
        <div className="traffic-status">
          <div className="traffic-item">
            <span className="label">Интернет</span>
            <span className="value">50 ГБ</span>
          </div>
          <div className="traffic-item">
            <span className="label">Образование</span>
            <span className="value highlighting">Безлимит</span>
          </div>
        </div>
      </div>

      <div className="settings-list">
        <div className="settings-item">
          <div className="item-left">
            <ShieldCheck size={20} />
            <span>Единый профиль САФУ</span>
          </div>
          <span className="status-active">Активен</span>
        </div>
        <div className="settings-item">
          <div className="item-left">
            <Smartphone size={20} />
            <span>Управление тарифом</span>
          </div>
          <ChevronRight size={20} />
        </div>
        <div className="settings-item">
          <div className="item-left">
            <Settings size={20} />
            <span>Настройки приложения</span>
          </div>
          <ChevronRight size={20} />
        </div>
        <div className="settings-item">
          <div className="item-left">
            <Info size={20} />
            <span>О проекте T2-NArFU</span>
          </div>
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
