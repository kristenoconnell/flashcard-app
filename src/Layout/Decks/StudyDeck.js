import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {readDeck} from "../../utils/api/index";
import BreadCrumb from "../Common/BreadCrumb";
import StudyCard from "./StudyCard";

function StudyPage(){
    const [deck, setDeck] = useState([]);
    const {deckId} = useParams();

    useEffect(() => {
      const loadDeck = async () => {
        const newDeck = await readDeck(deckId);
        setDeck(newDeck);
      };
      loadDeck();
    }, [deckId]);
  
  }
    /*if (deck.length) {
      return (
        <>
        <BreadCrumb link={`/decks/${deckId}`} linkName={deck.name} pageName={"Study"} />
        <div className="row">
          <h1>Study: {deck.name}</h1>
          <StudyCard cards={deck.cards} />
        </div>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }*/

  export default StudyPage;