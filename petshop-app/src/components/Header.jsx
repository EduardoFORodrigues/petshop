import ilustracao from "../assets/cachorro.svg"
export default function Header(){
    return(
    <header>
        <h1>Bem vindo ao Petshop do Pedro!</h1>
        <img src={ilustracao} alt="ilustração de Petshop"></img>
    </header>
    )
}