import './Card.css'

const Card = (props) =>{

    return(
        
        <div className='card' style={{backgroundColor: props.corPrincipal}}>
            <img src={props.imagem} alt={props.titulo}/>
            <h1>{props.titulo}</h1>
            <p>{props.paragrafo}</p>
            <button style={{color: props.corPrincipal}}>Leia Mais</button>
        </div>        
    )
}

export default Card