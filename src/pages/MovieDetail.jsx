import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/movies/" + id)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.director}</p>

            <h2>Recensioni</h2>

            <ul>
                {movie.reviews.map(r => (
                    <li key={review.id}>
                        {review.author}: {review.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieDetail;