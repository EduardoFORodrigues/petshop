import './ProductCard.css'
import {Heart} from 'akar-icons'

export default function ProductCard({product}) {
    return (
        <div className='product-card'>
            <div className='product-image-container'>
                <img src={product.image} alt={product.name} />
                <button className="favorite-button" type="button">
                    <Heart size={24}/>
                </button>
        </div>
                <div className='product-info'>
                    <h4 className='product-name'>{product.name}

                    </h4>
                    <p className='product-price'>{product.price}</p>

                </div>
          
        </div>
    )
}