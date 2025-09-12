import ShopSidebar from '../ShopSidebar/ShopSidebar';
import ProductCard from '../productCard/ProductCard';
import './ProductGrid.css';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

/*

const todosProdutos = [
  { id: 1, name: "Camiseta", price: 29.99 },
  { id: 2, name: "Calça Jeans", price: 79.99 },
  { id: 3, name: "Tênis", price: 120.00 },
  { id: 4, name: "Boné", price: 19.99 },
  { id: 5, name: "Mochila", price: 150.50 },
  { id: 6, name: "Relógio", price: 250.00 },
  { id: 7, name: "Óculos de Sol", price: 180.75 },
  { id: 8, name: "Jaqueta", price: 300.00 },
  { id: 9, name: "Meias", price: 12.50 },
  { id: 10, name: "Tênis de Corrida", price: 130.00 },
  { id: 11, name: "Camisa Social", price: 45.00 },
  { id: 12, name: "Cinto", price: 35.00 },
  { id: 13, name: "Carteira", price: 60.00 },
  { id: 14, name: "Luvas", price: 25.00 },
  { id: 15, name: "Gorro", price: 20.00 },
  { id: 16, name: "Blusa de Frio", price: 100.00 },
  { id: 17, name: "Shorts", price: 40.00 },
  { id: 18, name: "Chinelo", price: 15.00 },
  { id: 19, name: "Sandália", price: 50.00 },
  { id: 20, name: "Bolsa", price: 200.00 },
  { id: 21, name: "Pulseira", price: 45.50 },
  { id: 22, name: "Brinco", price: 60.00 },
  { id: 23, name: "Colar", price: 80.00 },
  { id: 24, name: "Camiseta Regata", price: 25.00 },
  { id: 25, name: "Calça Legging", price: 70.00 },
  { id: 26, name: "Jaqueta Corta Vento", price: 150.00 },
  { id: 27, name: "Moletom", price: 90.00 },
  { id: 28, name: "Tênis Casual", price: 110.00 },
  { id: 29, name: "Relógio Digital", price: 300.00 },
  { id: 30, name: "Carteira Masculina", price: 55.00 }
];

*/
const listaDeCategorias = [
  { nome: "Brinquedos", qtd: 32 }, // índice 0
  { nome: "Roupas", qtd: 30 }, // índice 1
  { nome: "Comidas", qtd: 100 },
];
 
const listaDeMarcas = [
  { nome: "Royal Canin", qtd: 32 },
  { nome: "K9 Spirit", qtd: 32 },
  { nome: "Premier", qtd: 100 },
];

const ProductGrid = () => {
    const [paginaAtual, setPaginaAtual] = useState(1);
    const produtosPorPagina = 6;
    const [loading, setLoading] = useState(false)
    const [pets, setPets] = useState([])
    const maximoDeAnimais = 50;

    //Chmando  API

    const API_Key = "fDZCE7dupHjj485FkZKsoDf3xCCtuThpq8ScCaAx0KZGXbNYXk";
    const API_SECRET = "P5i3Faf9U8hwR8rKWx6NLW0JITrgDNjAoWOcHzoj";

    const obterToken = async () => {

        const response = await axios.post(
            "https://api.petfinder.com/v2/oauth2/token",
            `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
            {
                headers: { "Content-Type": "aplication/x-www-form-urlencoded" }
            }
        );
        return response.data.acess_token;
    }

        const buscarPets = async (token, pagina, limite) => {
            const response = await axios.get(
                `/pf-api/animals?=${pagina}&limit=${limite}&type=Dog`,
                {
                    headers: { Authorization: `Bearer ${token}` }

                }
           
            );

        return response.data;
    }

    useEffect(() => {
        const fetchTokenEPets = async () => {
            if (loading) return;
            setLoading(true);

            try {
                const meuToken = await obterToken();
                const data = await buscarPets(meuToken, paginaAtual, produtosPorPagina); 

                const petsComImagem = data.animals.filter(
                    (pet) => pet.primary_photo_cropped || (pet.photos && pet.photos.length > 0)
                );

                const petsFormatados = petsComImagem.map((cachorro) => ({
                    id: cachorro.id,
                    name: cachorro.name,
                    price: cachorro.breeds.primary,
                    image: cachorro.primary_photo_cropped?.medium || (cachorro.photos && photos[0]?.medium)

                }));
                setPets(petsFormatados);

                const totalConsiderado = Math.min(
                    maximoDeAnimais,
                    data.pagination.total_count

                );
            }
            catch {
                
            }
        }
    })



    // ceil serve para arrendodar pra cima
    const totalDePaginas = Math.ceil(todosProdutos.length / produtosPorPagina);
    const indiceUltimoProduto = paginaAtual * produtosPorPagina;
    const indicePrimeiroProduto = indiceUltimoProduto - produtosPorPagina;
    const produtosAtuais = todosProdutos.slice(indicePrimeiroProduto, indiceUltimoProduto);

    const mudarPaginaAtual = (numeroDaPagina) => {
        setPaginaAtual(numeroDaPagina)
    }

    return(
        <div className='product-grid-container'>
            <ShopSidebar listaDeCategorias={listaDeCategorias} listaDeMarcas={listaDeMarcas}/>
            <main className='product-list-section'>
                <header className='product-list-header'>
                    <p>Mostrando {indicePrimeiroProduto + 1} até {Math.min(indicePrimeiroProduto, todosProdutos.length)} de {todosProdutos.length} resultados</p>

                    <div className='sort-by'>
                        <label htmlFor="sort">Ordenar por: </label>
                        <select name="sort" id="sort">
                            <option value="default">Mais recente</option>
                            <option value="price-asc">Preço: menor ao maior</option>
                            <option value="price-desc">Preço: maior ao menor</option>
                            <option value="name-asc">Nome: A-Z</option>
                        </select>
                    </div>
                </header>

                <div className='products-grid'>
                    {produtosAtuais.map(produto => (
                        <ProductCard key={produto.id} product={produto}/>
                    ))}
                </div>
                <Pagination
                    totalDePaginas={totalDePaginas}
                    paginaAtual={paginaAtual}
                    mudarPaginaAtual={mudarPaginaAtual} />
            </main>
        </div>
    );
}

export default ProductGrid;