const CardPerson = ({dev}) =>{
    const {nome, idade, pais} = dev
    return(
        <div>
            <h2>{nome}</h2>
            <p>{idade}</p>
            <p>{pais}</p>
        </div>
    )
}

export default CardPerson