import { useEffect, useState } from 'react'
import Card from './Card'

const Section = ({ genre }) => {
    const [movies, setMovies] = useState(null)
    const [pageState, setPageState] = useState(null)

    const fetchData = async() => {
        const response = await fetch("/.netlify/functions/getMovies", {
            method: "POST",
            body: JSON.stringify({ genre: genre, pageState: pageState })
        })
        const responseBody = await response.json()
        // console.log(responseBody.data.movies_by_genre.values)
        setMovies(responseBody.data.movies_by_genre.values)
        // console.log(responseBody.data.movies_by_genre.pageState)
        setPageState(responseBody.data.movies_by_genre.pageState)
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <>
            <div>{genre}</div>
            {movies && (
                <div className="movie-section">
                    {movies.map((movie, index) => (
                        <Card key={index} movie={movie}/>
                    ))}
                    <div className="more-button" 
                        onClick={() => {
                            setPageState(pageState)
                            fetchData()
                        }}
                    >
                    </div>
                </div>
            )}
        </>
    )
}

export default Section