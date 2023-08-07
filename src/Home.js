import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { StudentNames } from './Students';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star'; // Import the red star icon from MUI
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; 



import exampleImage from './Brain-Head-Transparent-File.png'; // Import the image


import styled from "styled-components";
import { handleBreakpoints } from '@mui/system';
import NewLandingPage from './NewLandingPage';


const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;
const ColumnContainer3 = styled.div`

`;

const ColumnContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;

`;

const TrueColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 400px;
  margin-top: 30%;
  color: white;
  border: 1px solid white;


`;

const ScrollToBottomButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f0f0f0;
  color: #333;
  font-size: 24px;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;

const ScrollToBottomArrow = styled.span`
  font-size: 24px;
`;

const TrueColumn2 = styled.div`
  display: flex;
  flex-direction: column; /* Set the flex direction to "column" */
  justify-content: space-evenly;
  align-items: flex-start;
  height: 400px;
  overflow-y: scroll;
color: white;

`;

const RowCobtainer = styled.div`
display: flex;
align-items: center; /* Center the titles vertically with respect to the components */
justify-content: center; /* Center the components horizontally */
flex-direction: row;
height: 100px;
width: 100%;
margin-top: 15%;
color: white;




`;

const TimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ButtonStyler = styled.div`
display: flex;

color: white;
font-size: 24px;
border: none;

cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`;
const TableConatiner2 = styled.div`
display: flex;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 400px;;
  width: 40%;
  float: right;




`;



function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('Level of Assistance:', 159, 6.0, 24, 4.0),
  createData('Sensory Regulation: ', 237, 9.0, 37, 4.3),
  createData('Emergency Protocols: ', 262, 16.0, 24, 6.0),
  createData('H/o Seizure:', 159, 6.0, 24, 4.0),
  createData('Contraindications: ', 237, 9.0, 37, 4.3),
  createData('Special Precautions: ', 262, 16.0, 24, 6.0),
  createData(' Standardized Test Scores: ', 159, 6.0, 24, 4.0),
  createData('Goal Adjustment Updates:  ', 237, 9.0, 37, 4.3),
  createData('Specific Treatment Protocol: ', 262, 16.0, 24, 6.0),
  createData(' Additional Comments:', 262, 16.0, 24, 6.0),
];

function Home() {

    const navigate = useNavigate();
  const [studentNames, setstudentNames] = useState(StudentNames);
  const [personName, setPersonName] = useState(null);
  const [date, setDate] = useState(null);
  const [Class, setClass] = useState(null);
  const [textFields, setTextFields] = useState(['']); 
  const [otextFields, setOTextFields] = useState(['']); 
  const [Valuer, setValuer] = useState(['']); 
  const [Value2, setValue2] = useState(['']); 

  console.log(StudentNames);


  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date); // Update the selected date when the date is changed
  };

  const handleClassChange = (event) => {
    setClass(event.target.value); // Update the Class when the text field value is changed
  };

  const handleValueChange = (event) => {
    setValuer(event.target.value); // Update the Class when the text field value is changed
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value); // Update the Class when the text field value is changed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (personName === null || date === null || Class === null) {
      alert('Please fill in all the required fields.');
    } else {
      setClass('');
      setDate(null);
      setPersonName('');
      setValuer('')
      setValue2('')

      navigate('/NewPage');
    }
  };
  


  const handleSubmit2 = (event) => {
 

      navigate('/Contact');
    
  };
  
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  const handleAddTextField = () => {
    setTextFields((prevTextFields) => [...prevTextFields, '']);
  };

  const handleTextFieldChange = (index, value) => {
    setTextFields((prevTextFields) => {
      const updatedTextFields = [...prevTextFields];
      updatedTextFields[index] = value;
      return updatedTextFields;
    });
  };

  const handleOAddTextField = () => {
    setOTextFields((prevTextFields) => [...prevTextFields, '']);
  };

  const handleOTextFieldChange = (index, value) => {
    setOTextFields((prevTextFields) => {
      const updatedTextFields = [...prevTextFields];
      updatedTextFields[index] = value;
      return updatedTextFields;
    });
  };

  const [timePickers, setTimePickers] = useState([dayjs('2022-04-17T15:30')]);

  const handleAddTimePicker = () => {
    setTimePickers([...timePickers, dayjs()]);
  };

  const handleRemoveTimePicker = (index) => {
    const updatedTimePickers = [...timePickers];
    updatedTimePickers.splice(index, 1);
    setTimePickers(updatedTimePickers);
  };

  const handleTimePickerChange = (index, value) => {
    const updatedTimePickers = [...timePickers];
    updatedTimePickers[index] = dayjs(value);
    setTimePickers(updatedTimePickers);
  };
  const handleORemoveTextField = (index) => {
    setOTextFields((prevOTextFields) => {
      const updatedOTextFields = [...prevOTextFields];
      updatedOTextFields.splice(index, 1); // Remove both TimePicker and TextField at the specified index
      return updatedOTextFields;
    });
  };
  const handleRemoveTextField = (index) => {
    setTextFields((prevOTextFields) => {
      const updatedOTextFields = [...prevOTextFields];
      updatedOTextFields.splice(index, 1); // Remove both TimePicker and TextField at the specified index
      return updatedOTextFields;
    });
  };


  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
   <>

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
       <div className="app">

     

   <div className="image-container">
          <img src={exampleImage} alt="Example" />
        </div>


   <RowCobtainer style={{ justifyContent: 'center' }}>
   <FormControl
  sx={{
    m: 2,
    minWidth: 300,
    '& .MuiInputLabel-root': { color: 'white' },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Set outline color to white when focused
    },
    '& .MuiOutlinedInput-input': {
      color: 'white', // Set the text color to white
      backgroundColor: 'transparent', // Set the background color to transparent
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Set the outline color to white
    },
    '& .MuiSelect-icon': {
      color: 'white', // Set the select icon color to white
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#87CEFA', // Set outline color to light blue on hover
    },
  }}
  size="small"
>
  <div> Select: <span style={{ color: 'red', marginLeft: '5px' }}>*</span> </div>
  <Select
    labelId="demo-multiple-name-label"
    id="demo-multiple-name"
    value={personName}
    onChange={handleChange}
    variant="outlined"
  >
    {studentNames.map((name) => (
      <MenuItem
        key={name.student_id}
        value={name.student_id} // Use student_id as the selected value
        // Adjust getStyles accordingly
      >
        {name.student_fname} {name.student_lname}
      </MenuItem>
    ))}
  </Select>
</FormControl>



<FormControl
  sx={{
    m: 2,
    minWidth: 300,
    '& .MuiInputLabel-root': { color: 'white' },
    '& .MuiOutlinedInput-root': {
      '&:hover, &.Mui-focused': {
        borderColor: '#87CEFA !important', // Set outline color to light blue on hover
      },
      '& .MuiOutlinedInput-input': {
        color: 'white', // Set the text color to white
        backgroundColor: 'transparent', // Set the background color to transparent
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Set the outline color to white
      },
    },
    '& .MuiSelect-icon': {
      color: 'white', // Set the select icon color to white
    },
  }}
  size="small"
>
  <div> Date: <span style={{ color: 'red', marginLeft: '5px' }}>*</span> </div>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      value={date}
      onChange={handleDateChange}
      PopperProps={{ style: { backgroundColor: 'transparent' } }}
      renderInput={(params) => (
        <TextField {...params} style={{ backgroundColor: 'transparent', color: 'white' }} />
      )}
      label={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '5px' }}></label>
        </div>
      }
    />
  </LocalizationProvider>
</FormControl>



  <FormControl>
    <div> Classroom: <span style={{ color: 'red' }}>*</span></div>
    <TextField value={Class} onChange={handleClassChange} id="outlined-basic" variant="outlined"     sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Set the outline color to white
      },
      '& .MuiInputBase-input': {
        color: 'white', // Set the text color to white
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'lightblue', // Set the outline color to white on hover
      },
    }}/>
  </FormControl>

  

</RowCobtainer>





<ColumnContainer2>

<FormControl>
  <div> Equipments:</div>
  <TextField
  value={Valuer}
  onChange={handleValueChange}


    id="outlined-basic"
    variant="outlined"
    sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Set the outline color to white
      },
      '& .MuiInputBase-input': {
        color: 'white', // Set the text color to white
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'lightblue', // Set the outline color to white on hover
      },
    }}
  />
</FormControl>

  <FormControl>
    <div> Strengths:</div>
    <TextField  
      value={Value2}
      onChange={handleValue2Change}
    
    id="outlined-basic" variant="outlined"     sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Set the outline color to white
      },
      '& .MuiInputBase-input': {
        color: 'white', // Set the text color to white
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'lightblue', // Set the outline color to white on hover
      },
    }}  />
  </FormControl>

  <FormControl>
    <div> Target Area: </div>
    <TextField   id="outlined-basic" variant="outlined"     sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Set the outline color to white
      },
      '& .MuiInputBase-input': {
        color: 'white', // Set the text color to white
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'lightblue', // Set the outline color to white on hover
      },
    }}/>
  </FormControl>
  <FormControl>
    <div> Allergies: </div>
    <TextField   id="outlined-basic" variant="outlined"     sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Set the outline color to white
      },
      '& .MuiInputBase-input': {
        color: 'white', // Set the text color to white
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'lightblue', // Set the outline color to white on hover
      },
    }} />
  </FormControl>



</ColumnContainer2>
<ButtonStyler>
<Button
  variant="outlined"
  href="#scrollToSection"
  sx={{
    color: 'white', // Set text color to white
    borderColor: 'white', // Set outline color to white
    '&:hover': {
      borderColor: 'white', // Set outline color to white on hover
    },
    '& a': {
      textDecoration: 'none', // Remove underline from the anchor tag
    },
  }}
>
  Scroll Down
  <a style={{ textDecoration: 'none' }}>
    <span style={{ fontSize: '30px', marginLeft: '5px' }}>▼</span>
  </a>
</Button>

</ButtonStyler>

<ColumnContainer3>
<TrueColumn id="scrollToSection">

<FormControl>
<h3> Schedule: </h3>
<TextField

          id="filled-multiline-static"
          label="Enter Prefered Scedule"
          multiline
          rows={4}
          variant="filled"
        />
  </FormControl>
<TableConatiner2>
  <TableContainer component={Paper} sx={{ background: 'transparent' }}>
    <Table sx={{ minWidth: 400 }} aria-label="caption table">
      <TableHead>
        <TableRow>
          {/* Add your table header content here */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.hasStar && <StarIcon style={{ color: 'red' }} />} 
              {row.name}
            </TableCell>
            <TableCell align="right">
              <TextField id="outlined-basic" label="" variant="outlined" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</TableConatiner2>


{/* <TrueColumn2> */}
  {/* <h3>Regular Scehdule</h3> */}
  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              {otextFields.map((value, index) => (
                <TimePicker
                  key={index}
                  label=""
                  defaultValue={dayjs('2022-04-17T15:30')} // Default value for duplicate TimePicker
                  onChange={(newTime) => handleOTextFieldChange(index, newTime)}
                />
              ))}
            </DemoContainer>
          </LocalizationProvider>

      <br />

      {textFields.map((value, index) => (

        
        
        <TextField
          key={index}
          id={`outlined-basic-${index}`}
          label=""
          variant="outlined"
          value={value}
          onChange={(e) => handleTextFieldChange(index, e.target.value)}
        />
      ))}

      <br />
      <Button variant="contained" onClick={handleAddTextField}>
      <AddIcon />      </Button>

      <Button variant="contained" onClick={handleRemoveTextField}>
      <RemoveIcon />      </Button>
    </TrueColumn2> */}
              <TrueColumn2>
        <div>
          <h3>Regular Schedule</h3>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              <TimePickerContainer>
                {otextFields.map((value, index) => (
                  <TimePicker
                    key={index}
                    label=""
                    onChange={(newTime) => handleOTextFieldChange(index, newTime)}
                    
                  />
                ))}
              </TimePickerContainer>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <br />
        <TimePickerContainer>
          {otextFields.map((value, index) => (
            <TextField
              key={index}
              id={`outlined-basic-${index}`}
              label=""
              variant="outlined"
              value={value}
              onChange={(e) => handleOTextFieldChange(index, e.target.value)}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Set the outline color to white
                },
                '& .MuiInputBase-input': {
                  color: 'white', // Set the text color to white
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'lightblue', // Set the outline color to white on hover
                },
              }} 
            />
          ))}
        </TimePickerContainer>
        <br />
        <Button variant="contained" onClick={handleOAddTextField}>
          <AddIcon />      
        </Button>
        <Button variant="contained" onClick={handleORemoveTextField}>
          <RemoveIcon />      
        </Button>
      </TrueColumn2>
</TrueColumn>
</ColumnContainer3>

<ScrollToBottomButton onClick={scrollToBottom}>
          <ScrollToBottomArrow>&#8595;</ScrollToBottomArrow>
        </ScrollToBottomButton>

    <RowCobtainer>
<form onSubmit={handleSubmit}> 
          <Button variant="outlined" size="large" type="submit" 
  sx={{
    color: 'white', 
    borderColor: 'white', // Set outline color to white
    '&:hover': {
      borderColor: 'white', // Set outline color to white on hover
    },
    '& a': {
      textDecoration: 'none', // Remove underline from the anchor tag
    },
  }}>
            Submit
          </Button>
        </form>
          </RowCobtainer>


          <RowCobtainer>
<form onSubmit={handleSubmit2}> 
          <Button variant="outlined" size="large" type="submit" 
  sx={{
    color: 'white', 
    borderColor: 'white', // Set outline color to white
    '&:hover': {
      borderColor: 'white', // Set outline color to white on hover
    },
    '& a': {
      textDecoration: 'none', // Remove underline from the anchor tag
    },
  }}>
            Contact me
          </Button>
        </form>
          </RowCobtainer>


   </div>
   </>
  );

}
export default Home; 
