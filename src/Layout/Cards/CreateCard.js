import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardForm from "./CardForm";
import BreadCrumb from "../Common/BreadCrumb";
import { readDeck, createCard } from "../../utils/api/index";

function NewCard() {
    const { deckId } = useParams();

    const initialFormState = {
        front: "",
        back: "",
        deckId: deckId,
        id: "",

    };

    const [deck, setDeck] = useState([]);
    const [formData, setFormData] = useState({...initialFormState});

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        async function cardCreate() {
            try {
                await createCard(deckId, formData);
                setFormData({initialFormState});
            } catch (error) {
                if (error.name!=="AbortError") {
                    throw error;
                }
            }
        }
        cardCreate();
    }

    useEffect(() => {
        const abortController = new AbortController();
  
        async function loadDeck() {
            try {
                const loadedDeck = await readDeck(deckId, {signal: abortController.signal});
                setDeck(loadedDeck);
            } catch (error) {
                if (error.name!=="AbortError") {
                    throw error;
                }
            }
        }
        loadDeck();
        return () => abortController.abort();
    }, [deckId])

  
        return (
            <div>
                <BreadCrumb link={`/decks/${deck.id}`} linkName={deck.name} pageName={"Add Card"} />
                <div className="row d-flex">
                    <h1>{deck.name}: Add Card</h1>
                        <form className="row" onSubmit={handleSubmit}>
                            <CardForm formData={formData} handleChange={handleChange} />
                                <Link to={`/decks/${deckId}`} className="btn btn-secondary">Done</Link>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
            </div>
        )
    }

export default NewCard;