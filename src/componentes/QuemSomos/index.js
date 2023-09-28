import Depoimentos from './Depoimentos'
import './QuemSomos.css'

const QuemSomos = () => {
    return(
        <section className="depoimentos section container" id="depoimentos">
            <h2 className="section__title depoimentos__title">Quem somos</h2>
            <p className="depoimentos__text">Aqui no Studio Moov a equipe é composta por fisioterapeutas, especialistas no movimento e na dor.<br />
            Os atendimentos realizados são todos personalizados, aliados aos objetivos e necessidades individuais de cada um.</p>

            <span className="section__subtitle depoimentos__subtitle">Depoimentos</span>
            
            <Depoimentos />
        </section>
    )
}

export default QuemSomos