import { useState } from 'react';
import Modal from './Modal';

const Card = ({ services }) => {
    const [isActive, setIsActive] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    // const classNameToClose = ['services__modal-close', 'services__modal modal active-modal']
    // const shoutCloseModal = classNameToClose.some(className => className === classNameClicked)
  
    const openModal = (services) => {
        setIsActive(true);
        setSelectedService(services);
    };
  
    const closeModal = event => {
        if(event.target.className === 'services__modal modal active-modal' || event.target.className === 'uil uil-times services__modal-close'){
            setIsActive(false);
            setSelectedService(null);
        }
    };
    
     return (
    <>
        {services.map(service => (
            <div className='services__content' key={service.id}  onClick={() => openModal(service)}>
                <div className="imgModal">
                    <img src={service.icon} alt={`Ícone ${service.name}`} />
                    <h3 className="services__title">{service.name}</h3>
                </div>
                <span className="services__button">
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