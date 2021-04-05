import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import Home from "./Common/Home";
import CreateDeck from "./Decks/CreateDeck";
import EditDeck from "./Decks/EditDeck";
import StudyDeck from "./Decks/StudyDeck";
import Deck from "./Decks/Deck"
import NotFound from "./NotFound";
import { listDecks } from "../utils/api/index";

function Layout() {

  const [decks, setDecks] = useState([]);

  //load decks
  useEffect(() => {
    //declare abort Controller
    setDecks([]);
    const abortController = new AbortController();
    //loading of decks from API
    async function loadDecks() {
      try {
        const loadedDecks = await listDecks();
        setDecks(loadedDecks);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    }
    loadDecks();
    return() => abortController.abort();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks}/>
          </Route>
          <Route path={"/decks/new"}>
            <CreateDeck />
          </Route>
          <Route path={"/decks/:deckId/edit"}>
            <EditDeck />
          </Route>
          <Route path={"/decks/:deckId/study"}>
            <StudyDeck />
          </Route>
          <Route path={"/decks/:deckId"}>
            <Deck decks={decks}/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
