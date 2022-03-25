import './App.css';
import { useState } from 'react'

import CardPerson from './components/CardPerson/CardPerson'
import Form from './components/Form/Form'

function App() {

  const [devs, setDevs] = useState([
    {nome: 'Allan', idade: 19, pais: 'Brasil'},
    {nome: 'Kennedy', idade: 23, pais: 'Brasil'},
    {nome: 'Bruna', idade: 29, pais: 'Brasil'},
  ])

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [pais, setPais] = useState('')


  const addDev = (nome, idade, pais) =>{
    const dev = {nome: nome, idade: idade, pais:pais}

    setDevs([...devs, dev])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {devs.reduce((anterior, atual) => anterior + atual.idade, 0)}
        </h1>
        
        {
          devs.map((dev, index) =>{
            return <CardPerson dev={dev} key={index}/>
          })
        }

        <Form fn={addDev} nome={nome} idade={idade} pais={pais}>
          <input type='text' placeholder='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input type='number' placeholder='idade'  onChange={(e) => setIdade(e.target.value)} />
          <input type='text' placeholder='pais' value={pais} onChange={(e) => setPais(e.target.value)}/>
        </Form>

      </header>
    </div>
  );
}

export default App;
