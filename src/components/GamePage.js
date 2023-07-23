import {useEffect,useState,useRef} from 'react';
import axios from 'axios';
import KeyBoard from './KeyBoard';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";// Importing the useSelector and useDispatch functions to select the required slices of state.
import { increment, setTargetWord, correctGuess,updateGameState,restartGame} from "../reduxStore/gameSlice";// Importing the action creators we’ve implemented in our slice

//import images
import img1 from '../images/state1.GIF'; 
import img2 from '../images/state2.GIF';
import img3 from '../images/state3.GIF';
import img4 from '../images/state4.GIF';
import img5 from '../images/state5.GIF';
import img6 from '../images/state6.GIF';
import img7 from '../images/state7.GIF';
import img8 from '../images/state8.GIF';
import img9 from '../images/state9.GIF';
import img10 from '../images/state10.gif';
import img11 from '../images/state11.GIF';

/** !Array<referenceToImportedElement> */
const gallery=[]
gallery.push(img1)
gallery.push(img2)
gallery.push(img3)
gallery.push(img4)
gallery.push(img5)
gallery.push(img6)
gallery.push(img7)
gallery.push(img8)
gallery.push(img9)
gallery.push(img10)
gallery.push(img11)

let GamePage=(props)=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading,setLoading]= useState(true);
    //get url param level, use its numeric value as the amount of useRef objects to fill array with. 
    const refs = Array.from(Array(Number(searchParams.get("level")))).map(() => useRef());
    //imageRef is use to update the graphic that will show the diff stages of the man being hanged.
    const imageRef=useRef()
    // The useSelector function allows us to find the needed slices of state 
    const gameState = useSelector((state) => state.game.value);
    const guessedLetters = useSelector((state) => state.game.value.lettersGuessed);
    const correctGuessz = useSelector((state) => state.game.value.hits);
    // Initiating the dispatch variable using the useDispatch function.
    const dispatch = useDispatch();
    
    useEffect(()=>{
        //on component init, get word from api call
        getWord();
    },[])

    useEffect(()=>{
        //rules for every guessed letter
        if(guessedLetters.length>0){
            console.log(" latest guessed letter == "+guessedLetters[guessedLetters.length-1])
            //check if guessed letter in target-word
            gameState.targetWord.includes(guessedLetters[guessedLetters.length-1]) ?
                (()=>{
                    //guessed letter in target-word & find indexs that the letter appears in the target word and display correct letters on screen
                    findIndicesOfChar(gameState.targetWord,guessedLetters[guessedLetters.length-1]).map((index)=>{
                        //update the underscore to display with correctly guessed word
                        refs[index].current.textContent =guessedLetters[guessedLetters.length-1];
                        dispatch(correctGuess())
                    });
                })()
                :(()=>{
                     
                    Number(gameState.strikes)<9 ?
                    (()=>{
                        //increment strikes
                        dispatch(increment())
                        //update image
                        imageRef.current.src=gallery[Number(gameState.strikes) + 1]
                    })()
                    :(()=>{
                        //10 incorrect guesses,display game lost.
                        imageRef.current.src=gallery[Number(gameState.strikes) + 1]
                        dispatch(increment())
                        //update gamestate to lost
                        dispatch(updateGameState({gameState:-1}))
                        alert("you lost!!!!")
                    })()
                    //check if strikes reached fail mark


                })();
            
        }

    },[guessedLetters])

    useEffect(()=>{
        //check if correct guesses line up to number of alphabets in target word to check if won
        correctGuessz!=0 && correctGuessz==gameState.targetWord.length ?
        (()=>{
            //update gamestate to win
            dispatch(updateGameState({gameState:2}));alert("you win")
        })()
        :console.log("correct but no win yet")
    },[correctGuessz])

    //setup the ui with the number blacks to represent the number of alphas in the word
    const setBlanksForTargetWord=()=>{
        refs.map((ref)=>{ ref.current.textContent="_"})
    }

    //perform async api call to get a random word
    const getWord= async ()=> {
            try {
                const response = await axios.get('https://random-word-api.herokuapp.com/word', {
                    params: {
                        lang: 'en',
                        length:Number(searchParams.get("level"))
                     }
                });
                console.log(response);
                //useReact Redux to store word selected and wordBeingFormedByUser
                dispatch(setTargetWord({targetWord:response.data[0]}));
            } 
            catch (error) {
                console.error(error);
                //check if its a network error(use static words)
                error.code=="ERR_NETWORK" || error.code ? 
                (()=>{
                    //setup for offlne mode.Use static word
                    alert("Offline Mode")
                    dispatch(setTargetWord({targetWord:"offline"}))
                })() 
                : (()=>{
                    alert("Error Setting up Game")
                })() 
            }
            finally
            {
                //display blanks on ui
                setBlanksForTargetWord();
                //hide spinner
                setLoading(false);
                //update gamestate to start
                dispatch(updateGameState({gameState:1}))

            } 
        }

    return(
        <>
            <h1>Hang-Man</h1>
            <h6 style={{color:'grey'}}>Difficulty Selected : {searchParams.get("level")==4 ? 'Easy': searchParams.get("level")==6 ? 'Medium': searchParams.get("level")==8 ? 'Hard':""}</h6>
            {loading && <Spinner animation="grow" variant="success" /> && <Spinner animation="grow" variant="success" /> && <Spinner animation="border" variant="info" />}
            <Row className='imgRow'>
                <Col >
                    <Image ref={imageRef} src={img1} thumbnail />
                </Col>
            </Row>
            { gameState.gameState==-1 && <h3>You lost this round! The correct word is {gameState.targetWord}</h3> || gameState.gameState==2 && <h3>Congrats , you win!</h3> }
            <h2>{refs.map((ref)=>{ return <span className='mx-1 fs-1' ref={ref}></span>})}</h2>
            <KeyBoard></KeyBoard>
            <Button variant="secondary" onClick={() =>{ dispatch(restartGame());imageRef.current.src=img1;setLoading(true);setBlanksForTargetWord();getWord()}}>Restart</Button>
        </>)
}

/** @return {Array<number>} */
function findIndicesOfChar(str, char) {
  const indices = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      indices.push(i);
    }
  }
  return indices;
}

export default GamePage;