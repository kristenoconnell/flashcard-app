import React, { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { listCards } from "../../utils/api/index";




function StudyCard({deck}) {
    const initialState = {
        onBack: false,
        currentCard: 0,
    };

    const { deckId } = useParams();
    const history = useHistory();
    const [deckCards, setDeckCards] = useState([]);
    const [studySession, setStudySession] = useState({...initialState});

    useEffect(() => {
        const loadCards = async() => setDeckCards(() => deck.cards);
        console.log(deckCards);
        loadCards();
    }, [deckCards, deck.cards])
    
    console.log("deck cards", deckCards);
    
    
    const handleNext = () => {
        //Go to next card until the last card is reached
        if (studySession.currentCard < deckCards.length - 1) {
            setStudySession({
                ...studySession,
                currentCard: studySession.currentCard + 1,
                onBack: false,
            })
        } 
        else {
            const confirm = window.confirm("Restart cards? Click cancel to return to the home page.");
            if(confirm) {
                setStudySession(initialState);
            } else {
                history.push("/");
            }
        }
    }


    const handleFlip = () => {
        if (studySession.onBack) {
            setStudySession({
                ...studySession,
                onBack: false
            }) 
        } else {
            setStudySession({
                ...studySession,
                onBack: true
            })
        }
    }
    


    if (deck.cards) {
        return (
            <div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        Card {studySession.currentCard + 1} of {deck.cards.length}
                    </h4>
                    <p className="card-text font-weight-lighter">
                        {studySession.onBack 
                        ? deck.cards[studySession.currentCard].back
                        : deck.cards[studySession.currentCard].front
                        }                      
                    </p>
                    <button className="btn btn-secondary mr-1" onClick={handleFlip}>Flip</button>
                    {studySession.onBack && (
                        <button className="btn btn-primary" onClick={handleNext}>Next</button>
                    )}
                </div>
            </div>
           </div>
        )
    }

    return (
        <div>
            <div className="row">
            <h3>Not enough cards.</h3>
            </div>
            <div className="row my-2">
                <p>You need at least 3 cards to study. This deck has {deck.cards.length} cards.</p>
            </div>
            <div className="row">
                    <Link to={`/decks/${deckId}/cards/new`}>
                            <button className="btn btn-primary">
                                <i class="bi bi-plus mr-1"></i>
                                Add Card
                            </button>
                        </Link>
            </div>
        </div>
    )
}

export default StudyCard;