import { useEffect, useRef, useState } from 'react'
import Dores from './pilatesTipos/dores'
import Gestante from './pilatesTipos/gestante'
import Idosos from './pilatesTipos/idosos'
import Kids from './pilatesTipos/kids'
import './pilatesTipos/MenuPilates.css'

const MenuPilates = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [lineStyles, setLineStyles] = useState({
        width: '0px',
        left: '0px'
    })

    const tabs = ['Pilates', 'Gestante', 'Idosos', 'Kids']
    const selectedTabRef = useRef(null);

    useEffect(() => {
        const selectedTab = selectedTabRef.current

        if(selectedTab){
            setLineStyles({
                width: `${selectedTab.offsetWidth}px`,
                left: `${selectedTab.offsetLeft + 30}px`
            })
        }
    }, [selectedIndex])

    const handleTab = index => {
        setSelectedIndex(index)
        mudaConteudo(index)

        selectedTabRef.current = index
    }
    
    const mudaConteudo = index => {
        const allContent = document.querySelectorAll('.content_box > *')

        allContent.forEach(content => content.classList.remove('active'))
        allContent[index].classList.add('active')
    }

    return(
    
        <>
            <div className='tab_box'>
                {tabs.map((tab, index) => (
                    <button
                        key={index} 
                        ref={index === selectedIndex ? selectedTabRef : null}
                        className={`tab_btn ${index === selectedIndex ? 'active' : ''}`}
                        onClick={() => handleTab(index)}   
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className='line' style={lineStyles}></div>

            <div className="content_box">
                <Dores />
                <Gestante />
                <Idosos />
                <Kids />
            </div> 
        </>

    )
}

export default MenuPilates