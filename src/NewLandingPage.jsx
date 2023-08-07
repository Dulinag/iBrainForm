import React, { useState, useEffect } from 'react';
import styled2 from 'styled-components';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; 

const TrueColor = styled2.div`
  
color: white;
text-align center;

padding: 10px;

`;

const Buttonstyler = styled2.div`
  
color: white;
display:flex;
justify-content: center;
padding: 10px;
margin-bottom: 5%;


`;

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  fontSize: '16px', // Modify the font size as desired
  '&:hover': {
    backgroundColor: 'darkgray', // Change the background color on hover if needed
  },
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function NewLandingPage() {

  
  const [todos, setTodos] = useState([]);
  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);



  const chunkSize = 10;

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      chunkedArray.push(chunk);
    }
    return chunkedArray;
  };

  const chunkedTodos = chunkArray(todos, chunkSize);
  const totalChunks = chunkedTodos.length;

  const handleNext = () => {
    setCurrentChunkIndex((prevIndex) => (prevIndex + 1) % totalChunks);
  };

  const handlePrev = () => {
    setCurrentChunkIndex((prevIndex) =>
      prevIndex === 0 ? totalChunks - 1 : prevIndex - 1
    );
  };

  const getAddressString = (address) => {
    const { street, suite, city, zipcode } = address;
    return `${street}, ${suite}, ${city}, ${zipcode}`;
  };

  
    return (
    <>
 
   
     <div className="app2">

   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">iBrain</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
      <div>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Todo ID</StyledTableCell>
                <StyledTableCell>User ID</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chunkedTodos[currentChunkIndex] &&
                chunkedTodos[currentChunkIndex].map((todo) => (
                  <StyledTableRow key={todo.id}>
                    <StyledTableCell component="th" scope="row">
                      {todo.id}
                    </StyledTableCell>
                    <StyledTableCell>{todo.userId}</StyledTableCell>
                    <StyledTableCell>{todo.title}</StyledTableCell>
                    <StyledTableCell>
                      {todo.completed ? 'Completed' : 'Pending'}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
          <Buttonstyler>

          <BlackButton variant="contained" size="medium" onClick={handlePrev}>
            Previous
          </BlackButton>
          <BlackButton variant="contained" size="medium" onClick={handleNext}>Next</BlackButton>
          </Buttonstyler>
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Username</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Website</StyledTableCell>
                  <StyledTableCell>Address</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
        {users.map((user) => (
          <StyledTableRow key={user.id}>
            <StyledTableCell component="th" scope="row">
              {user.name}
            </StyledTableCell>
            <StyledTableCell>{user.email}</StyledTableCell>
            <StyledTableCell>{user.username}</StyledTableCell>
            <StyledTableCell>{user.phone}</StyledTableCell>
            <StyledTableCell>{user.website}</StyledTableCell>
            <StyledTableCell>{getAddressString(user.address)}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
            </Table>
          </TableContainer>
        </div>




      </div>
    </>
  );
}
  
