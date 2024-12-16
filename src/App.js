import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px', backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '15px' }}>
      <Row>
        <Col>
          <input
            type="text"
            className="form-control text-right"
            value={display}
            disabled
            style={{
              height: '60px', 
              fontSize: '2rem', 
              textAlign: 'right', 
              borderRadius: '10px',
              marginBottom: '20px',
              padding: '10px',
              backgroundColor: '#fff',
              border: '2px solid #ddd',
            }}
          />
        </Col>
      </Row>

      {/* First Row */}
      <Row className="mb-2">
        <Col><Button variant="secondary" onClick={() => handleClick('7')} size="lg">7</Button></Col>
        <Col><Button variant="secondary" onClick={() => handleClick('8')} size="lg">8</Button></Col>
        <Col><Button variant="secondary" onClick={() => handleClick('9')} size="lg">9</Button></Col>
        <Col><Button variant="info" onClick={() => handleClick('/')} size="lg">/</Button></Col>
      </Row>

      {/* Second Row */}
      <Row className="mb-2">
        <Col><Button variant="secondary" onClick={() => handleClick('4')} size="lg">4</Button></Col>
        <Col><Button variant="secondary" onClick={() => handleClick('5')} size="lg">5</Button></Col>
        <Col><Button variant="secondary" onClick={() => handleClick('6')} size="lg">6</Button></Col>
        <Col><Button variant="info" onClick={() => handleClick('*')} size="lg">*</Button></Col>
      </Row>

      {/* Third Row */}
      <Row className="mb-2">
        <Col><Button variant="secondary" onClick={() => handleClick('1')} size="lg">1</Button></Col>
        <Col><Button variant="secondary" onClick={() => handleClick('2')} size="lg">2</Button></Col>
        <Col><Button variant="secondary" onClick={() => handleClick('3')} size="lg">3</Button></Col>
        <Col><Button variant="info" onClick={() => handleClick('-')} size="lg">-</Button></Col>
      </Row>

      {/* Fourth Row */}
      <Row className="mb-2">
        <Col><Button variant="secondary" onClick={() => handleClick('0')} size="lg">0</Button></Col>
        <Col><Button variant="secondary" onClick={() => handleClick('.')} size="lg">.</Button></Col>
        <Col><Button variant="danger" onClick={handleClear} size="lg">AC</Button></Col>
        <Col><Button variant="info" onClick={() => handleClick('+')} size="lg">+</Button></Col>
      </Row>

      {/* Equal Button */}
      <Row className="mb-3">
        <Col>
          <Button variant="success" block onClick={handleCalculate} size="lg">=</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
