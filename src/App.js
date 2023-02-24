import './App.css'
import { useEffect, useState } from 'react'
import FilmeCard from './components/FilmeCard'
import axios from 'axios'
import Error from './components/ErroCard'

function App () {
  const [card, setCard] = useState(false)
  const [cardErro, setCardErro] = useState(false)
  const [input, setInput] = useState('')
  const [url, setUrl] = useState('')
  const [data, setData] = useState({})
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const Changed = value => {
    setInput(value)
  }

  const search = () => {
    if (input) {
      let request = input.replace(' ', '+')
      let requestUrl = `http://www.omdbapi.com/?t=${request}&apikey=e0952c2`
      setUrl(requestUrl)
    } else {
      console.log('Não foi digitado nada')
    }
  }

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data.Poster)
        if (response.data.Response==="True") {
          setCard(true)
          setData(response.data)
          setCardErro(false)
        } else {
          if(response.data.Response==="False"){
            setCardErro(true)
          }
          setCard(false)
        }
      })
      .catch(erro => {
        console.log('deu erro')
      })
  }, [url])

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='topo'>
          <h1>NerdFlix</h1>
          <p>Busque sua série ou filme...</p>
        </div>

        <section className='seacrh'>
          <input
            type='text'
            onChange={e => {
              Changed(e.target.value)
            }}
          />
          <button
            onClick={() => {
              search()
            }}
          >
            Buscar
          </button>
        </section>
        <div className='sessionCard'>
          {card && data ? <FilmeCard data={data} /> : null}
          {cardErro ? <Error />: <></>}

        </div>
      </header>
    </div>
  )
}

export default App
