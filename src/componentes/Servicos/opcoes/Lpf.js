import { useEffect, useState } from 'react'
import meditando from '../../../imagens/meditando.svg'

const Lpf = () => {
    const [isActive, setIsActive] = useState(false)
    const openModal = () => setIsActive(true)
    const closeModal = () => setIsActive(false)

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
                <img src={meditando} alt="icone pessoa meditando" />
                <h3 className="services__title">LPF</h3>
            </div>

            <span className="services__button saibaMais"  onClick={openModal}>
                Saiba mais
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={`services__modal modal ${isActive ? "active-modal" : "modal"}`}>
                <div className="services__modal-content">
                <i className="uil uil-times services__modal-close fechaModal" onClick={closeModal}></i>

                <h3 className="services__modal-title">LPF</h3>
                <p className="services__modal-description">
                    LPF (Low Pressure Fitness)- popularmente mais conhecida por "barriga negativa". É um método de exercícios com baixa pressão no abdômen, fundamentados na técnica de respiração e posturas do RPG. <br /> Os exercícios envolvem correção postural, com vácuo abdominal e co-ativação de grupos musculares;
                </p>

                <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Conscientização e correção da postura global;</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Diminuição da circunferência abdominal, de até 12cm;</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Correção da diástase abdominal;</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Diminuição do escape (incontinência) urinária;</p>
                    </li>

                    <li className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Alívio do Estresse</p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Lpf