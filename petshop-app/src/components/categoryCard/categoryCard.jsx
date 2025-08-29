import './categoryCard.css'
import { ChevronRight } from 'akar-icons'


export default function Categorycard({image,title,productCount}) {
    return (
        <div className='category-Card'>
            <div className='card-image-wrapper'>
                <img className='category-image' src={image} alt={title}  />
            </div>

            <div className='card-info'>
                <div className='card-text'>
                    <h3 className='cad-title'>{title}</h3>
                    <p className='product-count'>{productCount}</p>
                </div>
                <div className='arrow-icon'>
                <ChevronRight/>
                </div>
            </div>
        </div>
    )
}