import React from "react";
import ListDecks from "../Decks/DeckList";
import NewDeck from "../Decks/CreateDeck";
import Deck from "../Decks/Deck";
import { Link, Route, Switch  } from "react-router-dom";

function Home({ decks, setDecks }) {

    return (
        <div>
            <div>
                <Link to="/decks/new"><button className="btn btn-primary btn-large"><i class="bi bi-plus"></i>Create Deck</button></Link>
            </div>
            <ListDecks decks={decks} setDecks={setDecks}/>
        
        <Switch>
            <Route path="/decks/new">
                <NewDeck />
            </Route>
           <Route path={`/decks/:deckId`}>
                <Deck decks={decks}/>
            </Route>
        </Switch>
    </div>
    )
}

export default Home;