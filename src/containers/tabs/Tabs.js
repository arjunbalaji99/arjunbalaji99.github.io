import React, {useState} from 'react';
import Tab from '../tab/Tab';
import './tabs.css';

const Tabs = ( {tabs} ) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='tabs-container'>
        <div className="tab-list">
            {tabs.map((tab, index) => (
            <Tab
                key={index}
                label={tab.label}
                onClick={() => setActiveTab(index)}
                isActiveTab = {activeTab === index}
            />
            ))}
        </div>
        <div className="tab-content">
          <div className='tab-content-title'>
            <span className='tab-content-title-desc'>{tabs[activeTab].title}</span>
            <span className='tab-content-title-company'><a href='youtube.com' target="_blank" rel="noopener noreferrer" className="custom-link">{tabs[activeTab].company}</a></span>
          </div>
          <span className='tab-content-time'>{tabs[activeTab].time}</span>
          <span className='tab-content-content' dangerouslySetInnerHTML={{ __html: tabs[activeTab].content }}></span>
        </div>
    </div>
  )
}

export default Tabs