
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
{/*import Nav from 'react-bootstrap/Nav';*/}
import './reactGaby.css'

const StudentForm = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido1: '',
    apellido2: '',
    email:  '',
    telefono: '',
  });
}

function IndexForm() {

  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container bg-color>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./img/logo.png"
              width="120"
              height="120"
              className="d-inline-block align-top"
            />{' '}
            <strong>Arrabal School</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/*<Nav className="justify-content-end miEstilo " activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Añadir Lista</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Editar Lista</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Eliminar Lista</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>*/}
      {/*AQUI LO QUE QUIERAS AÑADIR EN L WEB*/}
    </>

   
  );
}
  //export default AlignmentExample;



export default IndexForm