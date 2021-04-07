import React from "react";
import { Link, useParams } from "react-router-dom";

function CardsList({ deck, handleCardDelete }) {
    const { deckId } = useParams();

        return (
        <div className="container">
          <h2>Cards</h2>
          <div className="card-list">
              {deck.cards.map((card) => (
                  <div className="card">
                      <div className="card-body">
                          <div className="container">
                              <div className="row justify-content-start my-2">
                                  <div className="col-6">
                                      {card.front}
                                  </div>
                                  <div className="col-6">
                                      {card.back}
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-9">

                                  </div>
                                  <div className="col-3 pt-2 pb-1">
                                      <Link to={`/decks/${deckId}/cards/${card.id}/edit`}><button className="btn btn-secondary mr-1"><i className="bi bi-pencil mr-1"></i>Edit</button></Link>
                                      <button value={card.id} onClick={handleCardDelete} className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
              </div>
            </div>
        )
    };

    export default CardsList;
