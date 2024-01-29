import './reactGaby.css'
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

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

function ReactGaby() {
  function AlignmentExample(){
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
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
      </Nav>
    </>
  );
}
  export default AlignmentExample;
}


export default ReactGaby