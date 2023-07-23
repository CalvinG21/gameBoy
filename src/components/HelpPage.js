import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

//helpPage functional component. Provided info the rules and how to play.
const HelpPage = () => {
    return (
        <Container>
            <Row>
                <h1>Hang-Man Help-line ...JK Help page</h1>
                <Col  md={{ span: 6, offset: 3 }} >
                    <div className='mt-5 mb-1' >
                        <h6>Hangman is a word-guessing game. A word from the English language is chosen at random, and the player tries to guess it one letter at a time.</h6>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='mt-5 mb-3'   md={{ span: 8, offset: 2 }} >
                    <Card>
                        <Card.Body>
                            <Card.Title className='fs-4'>Rules</Card.Title>
                        </Card.Body>
                        <ListGroup as="ol" numbered className="list-group-flush" style={{"text-align": "left"}}>
                                <ListGroup.Item>Can only pick a letter once</ListGroup.Item>
                                <ListGroup.Item>Incorrect guesses will be counted, and a part of the "hangman" drawing will be added.</ListGroup.Item>
                                <ListGroup.Item>The game is lost if the entire "hangman" is drawn (usually 10 incorrect guesses).</ListGroup.Item>
                                <ListGroup.Item>The game is won if the player guesses all the letters in the target word before the "hangman" is completed.</ListGroup.Item>
                        </ListGroup>  
                    </Card>
                </Col>
                <Col className='mt-2 mb-5' md={{ span: 8, offset: 2 }} >
                    <Card>
                        <Card.Body>
                            <Card.Title className='fs-4'>How to Play</Card.Title>
                        </Card.Body>
                        <ListGroup as="ol" numbered className="list-group-flush" style={{"text-align": "left"}}>
                                <ListGroup.Item>Select your desired difficulty of the game.</ListGroup.Item>
                                <ListGroup.Item>There will be presented on screen a sequence of under-score symbol. Each under-score symbol represents thr position  of the alphabets that make up target word.</ListGroup.Item>
                                <ListGroup.Item>Click on the letter buttons to make your guesses.</ListGroup.Item>
                                <ListGroup.Item>If the letter is part of the target word then under-score symbol removed and letter will be revealed.</ListGroup.Item>
                                <ListGroup.Item>If the letter is not part of the word, a part of the "hangman" will be drawn.</ListGroup.Item>
                                <ListGroup.Item>Keep guessing until you win or lose.</ListGroup.Item>
                                <ListGroup.Item>Click resart or play-again to start new game</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HelpPage;
