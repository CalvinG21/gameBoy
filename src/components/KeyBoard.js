import React, { useEffect,useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { updateLettersGuessed} from "../reduxStore/gameSlice";//Importing the action creators we’ve implemented in game slice
import {useRef} from 'react';

const Keyboard = () => {
    // The useSelector function allows us to find the needed slices of state we
    // require. The useDispatch function will dispatch all the necessary actions to
    // the reducer to enable us to modify the state.
    const game = useSelector((state) => state.game.value);
    // Initiating the dispatch variable using the useDispatch function.
    const dispatch = useDispatch();
    
    const [buttonsDisabled,setbuttonsDisabledd]=useState(true)

    useEffect(() => {
      //on component init, set up key-press handlers
      const handleKeyPress = (event) => {
        const { key } = event;
        console.log('Key pressed:'+ key);
        handleInput(key);
      };
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
    
    useEffect(()=>{
      //set up buttons on start/restart
      if(game.gameState==0)
      {
        alphabets.map((letter) => 
        {     
          buttonRefs[letter].current.className="m-2 btn btn-primary";
          buttonRefs[letter].current.variant="primary";
        })
      }
      else if(game.gameState==1)
      {
        //if begin to play then enable button, disable while waiting for api to return with target word.
        setbuttonsDisabledd(false)
      }
    },[game.gameState])
  
    //handle button's click event
  const handleButtonClick = (key) => {
      console.log(`Button clicked: ${key}`);
      handleInput(key);
  };
  
  const handleInput=(key)=>{
      game.gameState==0 || game.gameState==1 ?    
      (()=>{//check redux global var LettersGuessed , to ensure no repeats and only handle letter if hit for first time 
        game.lettersGuessed.includes(key)  ? 
        (()=>{
              console.log("Letter already guessed!!!")
        })() 
        :(()=>{
              //check if user key press is alphabets only 
              alphabets.includes(key) ? 
              (()=>{
                  //check if guessed letter is in the target word
                  game.targetWord.includes(key) ? 
                  (()=>{
                      //guessed letter is in the target word
                      buttonRefs[key].current.className="btn btn-success m-2";
                      buttonRefs[key].current.variant="success";
                  })()
                  :(()=>{
                    //guessed letter is Not in the target word
                    buttonRefs[key].current.className="btn btn-danger m-2";
                    buttonRefs[key].current.variant="danger";
                  })() 
                  //keep track of all letters guessed so far
                  dispatch(updateLettersGuessed({lettersGuessed:key}))
              })()
              :console.log("Non-alphabetic")
        })()}
      )()
      :alert("game over,click Restart or Exit button");
  }

  const buttonRefs={}//JSON object to store refs to buttons(a,b,c,...z).
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  //forech alphabet button create and store its reference
  alphabets.map((letter) =>{ buttonRefs[letter]=useRef(null) })

  return (
    <Container>
      <Row>
        <Col  md={{ span: 8, offset: 2 }} >
          {alphabets.map((letter) => (
            <Button key={letter} ref={buttonRefs[letter]} variant="primary" className="m-2" disabled={buttonsDisabled} onClick={() => {handleButtonClick(letter) }}>
              {letter}
            </Button>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Keyboard;
