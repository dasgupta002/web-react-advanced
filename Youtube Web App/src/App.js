import React, { useState } from 'react';
import Video from './components/video.js';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [search, setSearch] = useState("");
  const [passChild, setPassChild] = useState('man city');

  const handleSubmit = (event) => {
    event.preventDefault();
    setPassChild(search);
  }

  return (
    <div className = "body">
      <Container>
        <Row>
         <Col xs = {12} md = {2}>
           <img src = "./images/logo.png" alt = "youtube-logo" width = "100px" style = {{ marginTop: 30 }}/>
         </Col>
         <Col xs = {12} md = {10}>
         <Form onSubmit = { handleSubmit }>
           <Form.Row className = "search-box">
            <Col>
             <Form.Control size = "lg" 
                           type = "text" 
                           placeholder = "Find your videos!" 
                           onChange = { ({target}) => setSearch(target.value) }             
              />
            </Col>
            <Col>
             <Button variant = "primary" size = "lg" onClick = { handleSubmit }>Search</Button>
            </Col>
           </Form.Row>
         </Form>     
         </Col>
        </Row>
        <Row>
         <Video query = { passChild }></Video>
        </Row>
      </Container>
    </div>
  );
}

export default App;