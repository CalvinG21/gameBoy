import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';

let HomePage=()=>
{
    const [level,setLevel]=useState(0);
    const navigate = useNavigate();
    //Invoked when assigned button is clicked
    const handleButtonClick = () => {
        //if no level is chosen then by default go withe easy.
       level==0?setLevel(4):console.log(" level already set")
       //navigate to url with query param 'level'. Indicates how hard game should be by number of alphabets in word.
       navigate("/game?level="+level);
    };

    return(
        <Container>
            <Row className='my-3'>
                <Col md={{ span: 8, offset: 2 }}>
                    <h1 style={{textAlign:"center"}}>Hang-Man</h1>
                    <h6> ....or women</h6>
                </Col>
            </Row>
            <Row className='my-3'>
                <Col md={{ span: 8, offset: 2 }}>
                    <h3>
                        Please select a difficulty level...
                    </h3>
                    <div>
                        <Button className='mx-2'  onClick={()=>{setLevel(4)}}  variant="primary">Easy</Button>
                        <Button className='mx-2'  onClick={()=>{setLevel(6)}} variant="secondary">Medium</Button>
                        <Button className='mx-2'  onClick={()=>{setLevel(8)}}variant="danger">Hard</Button>
                    </div>
                </Col>
            </Row>
            <Row className='my-3'>
                <Col md={{ span: 6, offset: 3 }}>
                    <h3>{level==4 ? 'Difficulty Selected : Easy': level==6 ? 'Difficulty Selected : Medium':level==8 ? 'Difficulty Selected : Hard':""}</h3>
                    <Button onClick={handleButtonClick} variant="success">Start Game</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;