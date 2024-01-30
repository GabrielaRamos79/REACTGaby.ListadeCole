
import { useState, useEffect } from 'react';
import { UserService } from '../userService';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
{/*import Nav from 'react-bootstrap/Nav';*/}
import './reactGaby.css'

const UserList = () =>{
  
  const [user, setUser] = useState(
    {
      userName: "",
      userSurname: "",
    });
 
  const [userList, setUserList] = useState([]);

  async function getData(){
      
      let users = await UserService.getAllUsers();
      
      setUserList(users)
      
  }

  getData();

  function handleNameChange(e){

      setUser({...user, [e.target.name]:e.target.value})
  };

  async function handleAddUserToList() {

    await UserService.submitUser(user);

      setUser({
        userName:  "",
        userSurname: ""
  });
  }
}

function IndexForm() {

  return (
    <>
    <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light">
        <Container>
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
     
      {/*AQUI LO QUE QUIERAS AÑADIR EN L WEB*/}
    
    { userList.map((user, index)=>(
          <li key={index}>{user.userName} {user.userSurname} </li>
      ))
    }

    </>

   
  );
}
  //export default AlignmentExample;



export default UserList;