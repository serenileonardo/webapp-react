import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ReviewPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [vote, setVote] = useState("");
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/movies/${id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, vote, text })
        }).then(() => navigate("/"));
    }

    return (
        <div className="container mt-4">
            <h1>Aggiungi Recensione</h1>

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
        </div>
    );
}

export default ReviewPage;