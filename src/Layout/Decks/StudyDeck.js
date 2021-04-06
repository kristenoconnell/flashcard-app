import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {readDeck} from "../../utils/api/index";
import BreadCrumb from "../Common/BreadCrumb";
import StudyCard from "./StudyCard";

function StudyPage(){
    const [deck, setDeck] = useState([]);
    const { deckId } = useParams();

    useEffect(() => {
      const loadDeck = async () => {
        const newDeck = await readDeck(deckId);
        setDeck(() => newDeck);
      };
      loadDeck();
    }, [deckId]);
  
    if (deck) {
      return (
        <>
        <BreadCrumb link={`/decks/${deckId}`} linkName={deck.name} pageName={"Study"} />
        <div className="row">
          <h2>Study: {deck.name}</h2>
        </div>
          <br />
        <div className="row">
          <StudyCard deck={deck} />
        </div>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  export default StudyPage;