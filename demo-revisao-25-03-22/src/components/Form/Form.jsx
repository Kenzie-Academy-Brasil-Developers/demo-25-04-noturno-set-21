const Form = ({children, fn, nome, idade, pais}) =>{

    return (
        <>
            {children}

            <button onClick={() => fn(nome, idade, pais)}>Criar</button>
        </>
    )
}

export default Form