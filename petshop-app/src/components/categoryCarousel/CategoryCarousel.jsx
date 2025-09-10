import Categorycard from "../categoryCard/categoryCard"
import Carousel from "../carousel/carousel"

const lista = [
    {
        title: "Acessórios",
        productcount: 64,
        image: "https://i.em.com.br/3h1P_-q5D5ewuWv9KmMJZSO7PVs=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/11/18/1323805/animais-de-estimacao_1_76898.jpg"
    },
     {
        title: "Comida",
        productcount: 30,
        image: "https://i.em.com.br/3h1P_-q5D5ewuWv9KmMJZSO7PVs=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/11/18/1323805/animais-de-estimacao_1_76898.jpg"
    },
      {
        title: "Acessórios",
        productcount: 64,
        image: "https://i.em.com.br/3h1P_-q5D5ewuWv9KmMJZSO7PVs=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/11/18/1323805/animais-de-estimacao_1_76898.jpg"
    },
       {
        title: "Acessórios",
        productcount: 64,
        image: "https://i.em.com.br/3h1P_-q5D5ewuWv9KmMJZSO7PVs=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/11/18/1323805/animais-de-estimacao_1_76898.jpg"
    }
 



    
]

export default function CategoryCarosel() {
    
    return (
        <Carousel title={"Pesquise por Categoria"}
            items={lista}
            RenderComponent={({item}) => <Categorycard categoria={item} />} />
    )
}