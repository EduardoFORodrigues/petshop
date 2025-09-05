import { useState } from 'react'
import '/.ShopSidebar.css'
import Slider from 'rc-slider'
export default function ShopSidebar({ listaDecategoria }) {
    
    const[priceRange,setPriceRange] = useState([0, 500])

   
    
    return (
        <div>
            <aside className='sidebar'>
                <div className='filter-group'>
                    <h4>Filtrar por Categoria</h4>
                    <ul>
                        {listaDecategoria.map((categoria) => {
                            <li key={categoria.nome} className='checkbox-item'>
                            <input tytpe="checkbox" id={categoria} />
                            <span className={categoria.nome}></span>
                            <span className='qtd-categoria'>{categoria.qtd}</span>
                            </li>
                        })}
                    </ul>
                </div>
                <div className='filter-group'>
                    <div className='price-filter-container'>
                        <h4>filtar por preço</h4>
                        <Slider range min={0} max={500} defaultValue={priceRange}
                        
                        onChange={(newRange)=>(setPriceRange(newRange))}/>
                        
                        
                    </div>

                </div>
            </aside>

        </div>
    )
}