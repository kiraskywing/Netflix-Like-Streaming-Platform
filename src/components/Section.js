import { useEffect, useState } from 'react'
import Card from './Card'

const Section = ({ genre }) => {
    const [movies, setMovies] = useState(null)

    const fetchData = async() => {
        const response = await fetch("/.netlify/functions/getMovies")
        const responseBody = await response.json()
        // console.log(responseBody.data.movies_by_genre.values)
        setMovies(responseBody.data.movies_by_genre.values)
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
                </div>
            )}
        </>
    )
}

export default Section