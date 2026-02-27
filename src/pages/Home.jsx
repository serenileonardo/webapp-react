import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <div className="container mt-4">
            <h1>Film</h1>

            <div className="d-flex flex-wrap gap-3">

                {movies.map(movie => (

                    <div className="card" key={movie.id} style={{ width: "200px" }}>


                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="card-img-top"
                            style={{ width: "200px", height: "auto" }}
                        />


                        <div className="card-body">
                            <h5>{movie.title}</h5>
                            <p>Regia: {movie.director}</p>

                            <Link
                                to={`/review/${movie.id}`}
                                className="btn btn-primary"
                            >
                                Recensisci
                            </Link>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Home;