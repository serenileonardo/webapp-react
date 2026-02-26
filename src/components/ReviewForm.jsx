import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReviewPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    const [name, setName] = useState("");
    const [vote, setVote] = useState("");
    const [text, setText] = useState("");

    // 🔥 Carica dati film + recensioni
    useEffect(() => {
        fetch("http://localhost:3000/movies/" + id)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setReviews(data.reviews || []);
            });
    }, [id]);

    // 🔥 Invio recensione
    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/movies/${id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, vote, text })
        })
            .then(res => res.json())
            .then(() => {
                // aggiunge subito la recensione nella pagina
                const newReview = { name, vote, text };
                setReviews([...reviews, newReview]);

                // reset form
                setName("");
                setVote("");
                setText("");
            });
    }

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div className="container mt-4">


            <h1>{movie.title}</h1>

            <img
                src={"http://localhost:3000/" + movie.image}
                alt={movie.title}
                style={{ maxWidth: "300px" }}
            />


            <h2 className="mt-4">Aggiungi recensione</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-2"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Voto"
                    value={vote}
                    onChange={e => setVote(e.target.value)}
                />

                <textarea
                    className="form-control mb-2"
                    placeholder="Commento"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />

                <button className="btn btn-success">
                    Invia recensione
                </button>

            </form>

            <h2 className="mt-4">Recensioni</h2>

            <ul>
                {reviews.map((r, i) => (
                    <li key={i}>
                        <strong>{r.name}</strong> — voto: {r.vote}
                        <br />
                        {r.text}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ReviewPage;