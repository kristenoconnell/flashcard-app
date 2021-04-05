import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import CardForm from "./CardForm";
import BreadCrumb from "../Common/BreadCrumb";
import { readDeck, readCard, updateCard } from "../../utils/api/index";

function EditCard() {
    const { deckId, cardId } = useParams();
    const history = useHistory();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});

    //load deck
    useEffect(() => {
        setDeck({});
        const loadDeck = async () => setDeck(await readDeck(deckId));
        loadDeck();
        const loadCard = async () => setCard(await readCard(cardId));
        loadCard();
    }, [deckId, cardId])

    const handleChange = ({ target }) => {
        setCard({
            ...card,
            [target.name]: target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        async function updateCardData() {
            try {
                await updateCard(card);
                history.push(`/decks/${deckId}`);
            } catch (error) {
                if (error.name!=="AbortError") {
                    throw error;
                }
            }
        } 
        updateCardData();
    }

    return (
        <div>
            {/*TODO: BREADCRUMB */}
            <div className="row w-100">
            <form onSubmit={handleSubmit}>
                <CardForm formData={card} handleChange={handleChange} />
                <Link to={`/decks/${deckId}`} className="btn btn-secondary">Cancel</Link>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            </div>
        </div>
    )

  

}

export default EditCard;