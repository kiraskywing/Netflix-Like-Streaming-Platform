import { useEffect, useState } from 'react'
import './App.css'
import Section from './components/Section'

const App = () => {
  const [genres, setGenres] = useState(null)
  
  const fetchData = async() => {
    const response = await fetch("/.netlify/functions/getGenres")
    const responseBody = await response.json()
    // console.log(responseBody.data.reference_list.values)
    setGenres(responseBody.data.reference_list.values)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(genres)
  return (
    <>
      {genres && (Object.values(genres).map((genre) => (<Section genre={genre.value}/>)))}
    </>
  )
}

export default App;
