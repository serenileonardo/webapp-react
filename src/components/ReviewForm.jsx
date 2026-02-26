import { useState } from "react";

function ReviewForm({ movieId, addReview }) {

    const [name, setName] = useState("");
    const [vote, setVote] = useState("");
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3000/movies/" + movieId + "/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                vote: vote,
                text: text
            })
        })
            .then(res => res.json())
            .then(() => {
                addReview({ name, vote, text });

                // svuota i campi
                setName("");
                setVote("");
                setText("");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Aggiungi Recensione</h3>

            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Voto"
                value={vote}
                onChange={(e) => setVote(e.target.value)}
            />

            <textarea
                placeholder="Recensione"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">Invia</button>
        </form>
    );
}

export default ReviewForm;