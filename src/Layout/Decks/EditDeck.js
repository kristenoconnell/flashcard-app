import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";
import BreadCrumb from "../Common/BreadCrumb";
import { readDeck, updateDeck } from "../../utils/api/index";

function EditDeck() {


    const initialFormState = {
        name: "",
        description: ""
    };

    const [deck, setDeck] = useState({...initialFormState});
    const history = useHistory();
    const { deckId } = useParams();

    useEffect(() => {
        async function loadDeck() {
            try {
                const loadedDeck = await readDeck(deckId);
                setDeck(loadedDeck);
            } catch (error) {
                if (error.name!=="AbortError") {
                    throw error;
                }
            }
        }
        loadDeck();
    }, [deckId]);

    const handleChange = ({target}) => {
        setDeck({
            ...deck,
            [target.name]: target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        async function updateDeckData() {
            try {
                await updateDeck(deck);
                history.push(`decks/${deckId}`)
            } catch (error) {
                if (error.name!=="AbortError") {
                    throw error;
                }
            }
        }
        updateDeckData();
    }

    return (
        <div>
            <BreadCrumb link={`/decks/${deckId}/edit`} linkName={deck.name} pageName={"Edit"} />
            <h1>Edit Deck</h1>
            <br />
            
                <DeckForm formData={deck} handleChange={handleChange} handleSubmit={handleSubmit}/>
                <Link to={`/decks/${deckId}`}><button className="btn btn-secondary mr-1">Cancel</button></Link>
                <button type="submit" className="btn btn-primary">Save</button>
        </div>
    )
}

export default EditDeck;