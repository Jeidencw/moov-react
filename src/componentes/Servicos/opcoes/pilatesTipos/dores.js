const Dores = () => {
    return(
        <div className="content active">
            <h3 className="services__modal-title">Pilates</h3>
            <p className="services__modal-description">Não possui restrições, podendo praticar desde crianças, gestantes e idosos, com profissionais qualificadas!</p>
            
            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Atua na melhora de flexibilidade, alongamentos, conscientização postural, concentração, equilíbrio e propriocepção;</p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Melhora a disposição e fortalecimento e resistência muscular;</p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Diminui dores pelo corpo, diminui o estresse;</p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Ajuda no Condicionamento Físico e Respiratório;</p>
                </li>

                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Melhora na qualidade do sono;</p>
                </li>
                
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Trata Patologias, doenças geradas ao longo da vida;</p>
                </li>
                
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Também é um ótimo aliado para quem ainda não tem nenhuma disfunção musculoesqueléticas, atuando de forma preventiva, e como uma escolha de atividade física.</p>
                </li>
            </ul>
        </div>
    )
}

export default Dores