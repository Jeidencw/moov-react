import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { Autoplay, Navigation, Keyboard, EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade'

import testemunha1 from '../../imagens/testemunha1.jpg'
import testemunha2 from '../../imagens/testemunha2.jpg'
import testemunha3 from '../../imagens/testemunha3.jpg'
import testemunha4 from '../../imagens/testemunha4.jpg'
import testemunha5 from '../../imagens/testemunha5.jpg'
import testemunha6 from '../../imagens/testemunha6.jpg'


const depoimentos = [
    {  
        id: 'jnsd@#',
        img: testemunha1,
        name: 'Davi',
        description: ' Um trabalho realmente bom, todos os aspectos do projeto foram seguidos passo a passo e com bons resultados.',
    },
    {
        id: 'MNBSD&S',
        img: testemunha2,
        name: 'Cleiton',
        description: ' Um trabalho realmente bom, todos os aspectos do projeto foram seguidos passo a passo e com bons resultados.',
    },
    {
        id: 'SMNCC*&S',
        img: testemunha3,
        name: 'Jasmini',
        description: ' Um trabalho realmente bom, todos os aspectos do projeto foram seguidos passo a passo e com bons resultados.',
    },
    {
        id: 'AHSB@HS',
        img: testemunha4,
        name: 'Veronica',
        description: ' Um trabalho realmente bom, todos os aspectos do projeto foram seguidos passo a passo e com bons resultados.',
    },
    {
        id: 'KJGA$@CS',
        img: testemunha5,
        name: 'Casção',
        description: ' Um trabalho realmente bom, todos os aspectos do projeto foram seguidos passo a passo e com bons resultados.',
    },
    {
        id: 'iugi897',
        img: testemunha6,
        name: 'Magali',
        description: ' Um trabalho realmente bom, todos os aspectos do projeto foram seguidos passo a passo e com bons resultados.',
    },
]
 

const Depoimentos = () => {

    const [slidesPerView, setSlidePerView] = useState(3)
    const [navigation, setNavigation] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 950){
                setSlidePerView(2)
                setNavigation(false)
            }else{
                setSlidePerView(3)
                setNavigation(true)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])
    
  return (  
        <div className='slide__containerDepoimentos'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                slidesPerGroup={3}
                grabCursor={true}
                keyboard={{ enabled: true }}
                navigation={navigation}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation, Keyboard, EffectFade]}
                className="slide__containerDepoimentos"
            >

                {depoimentos.map((depoimento) => (
                    <SwiperSlide key={depoimento.id} className='cardDepoimentos'>
                        <div className="image__contentDepoimentos">
                            <span className="overlay"></span>

                            <div className="card__imageDepoimentos">
                            <img src={depoimento.img} alt='foto da testemunha' className="card__imgDepoimentos" />
                            </div>
                        </div>

                        <div className="card__contentDepoimentos">
                            <h2 className="nomeDepoimentos">{depoimento.name}</h2>
                            <p className="descriptionDepoimentos">{depoimento.description}</p>        
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>      
        </div> 

  );
}

export default Depoimentos