import { useEffect, useRef, useState } from 'react'
import pesos from '../../../imagens/pesos.svg'

const TreinoFuncional = () => {
    const [isActive, setIsActive] = useState(false)
    const openModal = () => setIsActive(true)
    const closeModal = () => setIsActive(false)

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClick = event => {
            if(event.target.classList.contains('modal')){
                closeModal()
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {document.removeEventListener('mousedown', handleClick);}
    }, [])

    return(
        <div className="services__content">
            <div className="imgModal" onClick={openModal}> 
                <img src={pesos} alt="icones pesos" />
                <h3 className="services__title">Treinamento <br /> funcional </h3>
            </div>
        
            <span className="services__button saibaMais"  onClick={openModal}>
                Saiba mais
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
        
            <div className={`services__modal modal ${isActive ? "active-modal" : "modal"}`} ref={modalRef}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close fechaModal" onClick={closeModal}></i>
            
                    <h3 className="services__modal-title">Treinamento funcional</h3>
                    <p className="services__modal-description">O treinamento funcional é um método de exercícios que visa desenvolver a força, a estabilidade e a mobilidade do corpo, por meio de movimentos que replicam as atividades diárias e melhoram o desempenho funcional em diferentes contextos.</p>
            
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Melhora da funcionalidade</p>
                        </li>
            
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Fortalecimento do corpo como um todo</p>
                        </li>
            
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Aumento da estabilidade e equilíbrio</p>
                        </li>
            
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Melhora da coordenação e agilidade</p>
                        </li>
            
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Aumento do condicionamento físico</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TreinoFuncional