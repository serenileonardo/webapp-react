import { useEffect, useState } from "react";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/movies")
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error("Errore nel recupero dei film:", error);
            });
    }, []);

    return (
        <div>
            <h1>Lista Film</h1>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img
                            src={"http://localhost:3000/images/" + movie.image}
                            alt={movie.title}
                        />
                        — {movie.director}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;