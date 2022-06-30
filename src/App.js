import { useEffect, useState } from 'react'
import './App.css'
import Section from './components/Section'

const App = () => {
  const genreIncrement = 4
  const [genres, setGenres] = useState(null)
  const [limit, setLimit] = useState(genreIncrement)
  
  const fetchData = async() => {
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
      body: limit
    })
    const responseBody = await response.json()
    // console.log(responseBody.data.reference_list.values)
    setGenres(responseBody.data.reference_list.values)
  }

  useEffect(() => {
    fetchData()
  }, [, limit])

  console.log(genres)
  return (
    <>
      {genres && (Object.values(genres).map((genre) => (<Section genre={genre.value}/>)))}
      <div className="page-end"
        onMouseEnter={() => {
          setLimit(limit + genreIncrement)
        }}
      />
    </>
  )
}

export default App;
