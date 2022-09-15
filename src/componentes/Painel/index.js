import Card from '../Card'
import './Painel.css'

const Painel = () => {

    return(
        <div className='painel'>
            <Card
                imagem = "/imagens/icon-sedans.svg"
                titulo = "SEDANS"
                paragrafo = "Escolha um sedan por sua acessibilidade e excelente economia de combustível. Ideal para passear na cidade ou na sua próxima viagem."
                corPrincipal = "hsl(31, 77%, 52%)" 
            />
            <Card 
                imagem = "/imagens/icon-suvs.svg"
                titulo = "SUVS"
                paragrafo = "Pegue um SUV por seu interior espaçoso, potência e versatilidade. Perfeito para suas próximas férias em família e aventuras off-road."
                corPrincipal = "hsl(184, 100%, 22%)" 
            />
            <Card 
                imagem = "/imagens/icon-luxury.svg"
                titulo = "LUXURY"
                paragrafo = "Faça um passeio nas melhores marcas de carros sem os preços inflados. Aproveite o conforto aprimorado de um aluguel de luxo e chegue em grande estilo."
                corPrincipal = "hsl(179, 100%, 13%)" 
            />
        </div>
    )
}

export default Painel