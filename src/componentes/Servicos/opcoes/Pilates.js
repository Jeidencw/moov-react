import { useEffect, useState } from 'react'
import pilates2 from '../../../imagens/pilates2.svg'
import MenuPilates from './MenuPilates'

const Pilates = () => {
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
        <div className="imgModal" onClick={openModal}>
          <img src={pilates2} alt="icone pessoa alongando" />
        <h3 className="services__title">Pilates</h3>
        </div>

        <span className="services__button saibaMais" onClick={openModal}>
          Saiba mais
          <i className="uil uil-arrow-right services__button-icon"></i>
        </span>

        <div className={`services__modal modal ${isActive ? "active-modal" : "modal"}`}>
          <div className="services__modal-content">
            <i className="uil uil-times services__modal-close fechaModal" onClick={closeModal}></i>
            <MenuPilates />
          </div>
        </div>
      </div>
    )
}

export default Pilates