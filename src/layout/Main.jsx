import { useState, useEffect } from "react"
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"

const Main = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState (true)

    useEffect (() => {
        fetch('https://www.omdbapi.com/?apikey=6e22be8b&s=all')
            .then(response => response.json())
            .then ((data) => 
                setMovies (data.Search),
                setLoading (false)
            )
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [])
    return <main className="continer contant">
        {loading ? <Preloader/> : <Movies movies={movies}/>}
    </main>
}

export {Main}