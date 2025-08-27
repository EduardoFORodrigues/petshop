import './Navbar.css';
import {Search, Heart, Cart} from 'akar-icons'
import logo from '../../assets/logo.svg'

export default function Navbar(){


    return(
        <nav className='navbar'>
           <div className='container'>
            <a href="#" className=''> <img src={logo} alt="logo do peshop" /></a>
                <ul className='nav-links'>
                    <li>Inicío</li>
                    <li>Comprar</li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                </ul>
                <div className='nav-actions'>
                    <div className='search-bar'>
                        <input type="text" placeholder='Pesquise aqui...' />
                    <button className='search-icons'>
                        <Search className="icon" size={20 }></Search>
                        
                    </button>
                    </div>
                     <button className='icons-btn'>
                        <Heart></Heart>  
                        <span className='badge'>0</span>                       
                    </button>
                    <button className='icons-btn'>
                        <Cart></Cart>   
                         <span className='badge'>0</span>                         
                    </button>
                </div>
           </div> 
        </nav>
    )
}
    
   

   
//Outro exemplo  funcation

// const Navbar =()=>{

    //    return(

      //  ) 
    
    //}