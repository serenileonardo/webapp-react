import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

function MovieDetail() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies/" + id)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setReviews(data.reviews);
            });
    }, [id]);

    if (!movie) return <p>Caricamento...</p>;

    // funzione per aggiungere recensione nuova
    function addReview(newReview) {
        setReviews([...reviews, newReview]);
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.director}</p>

            <h2>Recensioni</h2>

            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        {review.name} — voto: {review.vote}
                        <br />
                        {review.text}
                    </li>
                ))}
            </ul>

            {/* FORM */}
            <ReviewForm movieId={id} addReview={addReview} />
        </div>
    );
}

export default MovieDetail;