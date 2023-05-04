import { useState } from "react";
import { getRandomNumber } from "./utils/getRandom";
import phrases from "./assets/phrases.json";
import Phrase from "./components/Phrase/Phrase";
import Button from "./components/Button/Button";

import './App.css';
import space1 from "./assets/space_1.jpg"
import space2 from "./assets/space_2.jpg"
import space3 from "./assets/space_3.jpg"
import space4 from "./assets/space_4.jpg"

const backgrounds = [space1, space2, space3, space4];

function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length - 1)];
  
  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground()); 
  
  const changePhrase = () => {
    let newPhrase = getRandomPhrase();

    while (newPhrase.phrase === phraseObject.phrase) {
      newPhrase = getRandomPhrase();
    }

    setPhraseObject(newPhrase);
  };

  const changeBackground = () => {
    let newBackground = getRandomBackground();

    while (newBackground === background) {
      newBackground = getRandomBackground();
    }
    
    setBackground(newBackground);
  };

  const handlerClick = () => {
    changePhrase();
    changeBackground();
  }

  return (
    <div className="container_app" style={{backgroundImage: `url("${background}")`}}>
      <h1>INFOGALAX</h1>
      <Phrase phrase={phraseObject.phrase}/>
      <p>
        Author : <mark>{phraseObject.author}</mark>
      </p>
      <div className="btn_container">
        <Button handlerClick={handlerClick}/>
      </div>
    </div>
  );
}

export default App;
