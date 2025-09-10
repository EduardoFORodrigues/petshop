import GatoImg from '../../assets/Gato.svg'
import HamsterImg from '../../assets/Hamster.svg'
import CachorroImg from '../../assets/Cachorro.svg'
import PapagaioImg from '../../assets/Papagaio.svg'
import CoelhoImg from '../../assets/Coelho.svg'
import TartarugaImg from '../../assets/Tartaruga.svg'
import Carousel from '../carousel/carousel'
import Animalcard from '../animalCard/animalCard'
import CTAButton from '../ctaButton/ctaButton'


export default function AnimalCarosel() {

    const animais = [
    
        { name: 'Gato', image: GatoImg },
        { name: 'Hamster', image: HamsterImg },
        { name: 'Cachorro', image: CachorroImg },
        { name: 'Papagaio', image: PapagaioImg },
        { name: 'Coelho', image: CoelhoImg },
        { name: 'Tartaruga',image: TartarugaImg}
        
    ]

 
    
    return (
    
    <div>
            <Carousel title={"Compre a partir do seu Pet"}
                items={animais}
                RenderComponent={({item})=> <Animalcard animal={item}/>}
            />
              
    </div>
        
    )
}