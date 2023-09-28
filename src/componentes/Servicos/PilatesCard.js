import React, { useState } from 'react';

const PilatesCard = ({ service }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="services__content" key={service.id}>
      <div className="imgModal">
        <img src={service.icon} alt={`Ícone ${service.name}`} />
        <h3 className="services__title">{service.name}</h3>
      </div>
      <span className="services__button" onClick={() => openModal(service)}>
        Saiba mais
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div className="services__modal modal">
        <div className="services__modal-content">
          <i className="uil uil-times services__modal-close fechaModal"></i>

          <div className="tab_box">
            {service.tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab_btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
            <div className="line"></div>
          </div>

          <div className="content_box">
            {service.tabs.map((tab, index) => (
              <div
                key={index}
                className={`content ${activeTab === index ? 'active' : ''}`}
              >
                <h3 className="services__modal-title">{tab.title}</h3>
                <p className="services__modal-description">{tab.description}</p>
                <ul className="services__modal-services grid">
                  {tab.benefits.map((benefit, idx) => (
                    <li key={idx} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p className="services__modal-info">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilatesCard;
