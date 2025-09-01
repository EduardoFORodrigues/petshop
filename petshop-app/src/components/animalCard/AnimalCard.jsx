import './Animalcard.css'

export default function Animalcard({animal}) {
    return (
        <div className='animal-Card'>
            <div className='animal-image-wrapper'>
                <img src={animal.image} alt={animal.name} />
            </div>
            <p className='animal-name'>{animal.name}</p>
        
        </div>
    )
}