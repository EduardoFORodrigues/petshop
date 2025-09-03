import '../Hero/hero.css'
import heroImg from '../../assets/heroImg.svg'
import CTAButton from '../ctaButton/ctaButton'

const heroList = {
    title:'Bem-vindo ao PetShop dooi0oo0 "Fulano"!',
    name: 'Pet Shophlkhh',
    subTitle:'Aqui você encontra tudo para seu animal de estimação'
}

export default function Hero() {
    
    return (
        
        <section className='hero'>
            <div className='hero-content'>
                <span className='subtitle'>
                 {heroList.name}
                </span>
                <h1>{heroList.title }</h1>
                <p>
                     {heroList.subTitle}
                </p>
                <CTAButton text={'Compre Agora'}/>
           </div>
            <div className='hero-image-container'>
                <img className='img' src={heroImg} alt="imgcirculo" />
            </div>
        </section>

       
    )
}