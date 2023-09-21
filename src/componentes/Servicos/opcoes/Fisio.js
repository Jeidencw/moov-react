import { useEffect, useRef, useState } from 'react'
import fisioterapia from '../../../imagens/pilates.svg'

const Fisio = () => {
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
            <div className="imgModal"  onClick={openModal}>
                <img src={fisioterapia} alt="icone pessoa meditando" />
                <h3 className="services__title">Fisioterapia</h3>
            </div>

            <span className="services__button saibaMais"  onClick={openModal}>
                Saiba mais
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={`services__modal modal ${isActive ? "active-modal" : "modal"}`} ref={modalRef}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close fechaModal" onClick={closeModal}></i>

                    <h3 className="services__modal-title">Fisioterapia</h3>
                    <p className="services__modal-description">A fisioterapia é uma área da saúde que trata de problemas de movimento e função do corpo. Fisioterapeutas ajudam as pessoas a se recuperar de lesões, aliviar a dor e melhorar a mobilidade. Eles usam exercícios e técnicas terapêuticas para ajudar os pacientes a se sentirem melhor e terem uma vida mais saudável. O objetivo é melhorar a qualidade de vida e a independência das pessoas.</p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Recuperação de lesões</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Alívio da dor</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Melhora da mobilidade e função</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Prevenção de lesões</p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Melhora da saúde respiratória</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Fisio