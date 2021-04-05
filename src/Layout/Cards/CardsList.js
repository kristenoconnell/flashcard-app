import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";

//load the deck in Deck.js
//import deck into cards as prop
//cardslist is a child of the deck
//update the state of the deck in the parent component
//set cards by deck.cards --> do i need to load the cards here? because i can 
//based off deckId

//map the cards list
//to display cards (front & back)
//plus add card buttons & corresponding functionality and routes. 
function CardsList({ deck, handleCardDelete, cards }) {
    const { deckId } = useParams();
    
    
    console.log(deckId);
    console.log(deck);


        return (
        <>
          <h2>Cards</h2>
          {/*<div className="card-list">
              {deck.cards.map((card) => (
                  <div className="card">
                      <div className="card-body">
                          <div className="container">
                          //<Card />
                              <div className="row justify-content-start">
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
                                  <div className="col-3">
                                      <Link to={`/decks/${deckId}/cards/${card.id}/edit`}><button className="btn btn-secondary"><i className="bi bi-pencil"></i>Edit</button></Link>
                                      <button value={card.id} onClick={handleCardDelete} className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
              </div>*/}
            </>
        )
    };

    export default CardsList;
