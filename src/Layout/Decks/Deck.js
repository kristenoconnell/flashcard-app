import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom";
import { readDeck, deleteDeck, listCards, deleteCard } from "../../utils/api/index";
import CardsList from "../Cards/CardsList";

function Deck() {
    const { deckId } = useParams();
    const { url } = useRouteMatch();
    const history = useHistory();
    console.log("url from params", url);
    console.log("deck id from params", deckId);
    const [deck, setDeck] = useState({});
    //const [cards, setCards] = useState([]);


    //load deck & cards
    useEffect(() => {
        async function loadDeck() {
                console.log("deck id from async", deckId)
                if (deckId) {
                const loadedDeck = await readDeck(deckId);
                console.log(loadedDeck);
                setDeck(()=>loadedDeck);
                }
                /*const loadedCards = await listCards(loadedDeck.cards);
                setCards(loadedCards);
                console.log(cards);*/
            }
        loadDeck();
    }, [deckId]);

    //delete the deck 
    const handleDeckDelete = async () => {
        const confirm = window.confirm("Delete this deck? You will not be able to recover it.");
        if (confirm) {
            await deleteDeck(deckId);
            history.push("/");
        }
    };

    //delete a card
    const handleCardDelete = async ({ target }) => {
        console.log(target);
        const confirm = window.confirm("Delete this card? You will not be able to recover it.");
        if (confirm) {
            const cardDelete = async () => await deleteCard(target.value);
            cardDelete();
            const reloadDeck = await readDeck(deckId);
            setDeck(reloadDeck);
        }
    }

if (deck.id) {
        return (
            <div>
            {/*BREADCRUMB NAV */}
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                 <div className="row justify-content-between">
                    <div className="col-8">
                        <Link to={`/decks/${deckId}/edit`}>
                            <button className="btn btn-secondary mr-1">
                                <i class="bi bi-pencil mr-1"></i>
                                Edit
                            </button>
                        </Link>
                        <Link to={`/decks/${deckId}/study`}>
                            <button className="btn btn-primary mr-1">
                                <i class="bi bi-book mr-1"></i>
                                Study
                            </button>
                        </Link>
                        <Link to={`/decks/${deckId}/cards/new`}>
                            <button className="btn btn-primary">
                                <i class="bi bi-plus mr-1"></i>
                                Add Card
                            </button>
                        </Link>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-danger" onClick={handleDeckDelete}><i className="bi bi-trash"></i></button>
                    </div>
                </div>
                <CardsList deck={deck} handleCardDelete={handleCardDelete} />
                </div>
            
        )
      } 
              return "No deck here! Please create a new deck."
    }


export default Deck;