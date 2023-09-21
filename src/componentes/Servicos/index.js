import './servicos.css'
import Lpf from './opcoes/Lpf'
import TreinoFuncional from './opcoes/TreinoFuncional'
import Fisio from './opcoes/Fisio'
import Pilates from './opcoes/Pilates'

const Servicos = () => {
    

    return(
        <section className='services section' id='servicos'>
            <h2 className="section__title servicos__title">Serviços</h2>

            <div className="services__container container grid">
                <Lpf />
                <Pilates />
                <TreinoFuncional />
                <Fisio />
            </div>
        </section>
    )
}

export default Servicos