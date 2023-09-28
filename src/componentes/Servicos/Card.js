import { useState } from 'react';
import Modal from './Modal';

const Card = ({ services }) => {
    const [isActive, setIsActive] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
  
    const openModal = (services) => {
        setIsActive(true);
        setSelectedService(services);
    };
  
    const closeModal = () => {
        setIsActive(false);
        setSelectedService(null);
    };
     return (
    <>
        {services.map(service => (
            <div className='services__content' key={service.id}>
                <div className="imgModal">
                    <img src={service.icon} alt={`Ícone ${service.name}`} />
                    <h3 className="services__title">{service.name}</h3>
                </div>
                <span className="services__button" onClick={() => openModal(service)}>
                    Saiba mais
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
            </div>
        ))}
  
        {isActive && <Modal openModal={isActive} closeModal={closeModal} service={selectedService} />}
    </>
    );
  };
  

export default Card;