import React, { useState } from 'react';

const Modal = ({ openModal, closeModal, service }) => {

    const [activeTab, setActiveTab] = useState(0);
  
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
      <>
        {service.name === 'Pilates' 
        ? (
          <div className={`services__modal modal ${openModal ? 'active-modal' : ''}`}>
            <div className='services__modal-content'>
                <i className="uil uil-times services__modal-close fechaModal" onClick={closeModal}></i>
  
            <div className="tab_box">
            {service.tabs.map((tab, index) => (
                <button
                key={index}
                className={`tab_btn ${index === activeTab ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
                >
                {tab.title}
                </button>
            ))}
            <div className="line"></div>
            </div>
  
            <div className="content_box">
            {service.tabs.map((tab, index) => (
                <div className={`content ${index === activeTab ? 'active' : ''}`} key={index}>
                <h3 className="services__modal-title">{tab.subtitle}</h3>
                <p className='services__modal-description'>{tab.description}</p>
  
                <ul className='services__modal-services grid'>
                    {tab.benefits.map((beneficio, i) => (
                    <li className="services__modal-service" key={i}>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{beneficio}</p>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
            </div>
            </div>
        ) : (
  
          <div className={`services__modal modal ${openModal ? 'active-modal' : ''}`}>
              <div className='services__modal-content'>
                  <i className="uil uil-times services__modal-close fechaModal" onClick={closeModal}></i>
                      <h3 className="services__modal-title">{service.name}</h3>
                      <p className='services__modal-description' dangerouslySetInnerHTML={{ __html: service.descricao}}></p>
          
                      <ul className='services__modal-services grid'>
                      {service.beneficios.map(beneficio => (
                          <li className="services__modal-service" key={beneficio}>
                          <i className="uil uil-check-circle services__modal-icon"></i>
                          {/* <p className="services__modal-info">{beneficio}</p> */}
                          <p className="services__modal-info" dangerouslySetInnerHTML={{ __html: beneficio }}></p>
                          </li>
                      ))}
                      </ul>
              </div>
          </div>
        )}</>
    );
  };
    

export default Modal;
