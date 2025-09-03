import './App.css'

import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/carousel'
import Categorycard from './components/categoryCard/categoryCard'
import CategoryCarousel from './components/categoryCarosel/CategoryCarousel'
import Animalcard from './components/animalCard/animalCard'
import AnimalCarousel from './components/AnimalCarosel/animalCarousel'
import Hero from './components/Hero/hero'

function App() {
  
  return (
    <>
       <Navbar/>
      <Hero />
      
       <AnimalCarousel/>
         
    </>
  )
}

export default App
