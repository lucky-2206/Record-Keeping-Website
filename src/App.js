import './App.css';
import Header from './Component/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //initialize it with array so that we can store all the input value
  const [data, setData] = useState([])

  function addData() {
    // ...data is used to retrieve the previous data entered otherwise previous data will be rewritten
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  function deleteItem(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  return (
    <div className="App">
      {/* Form */}
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="EmailID"
            variant="outlined"
          />
          <Button
            onClick={addData}
            variant="contained"
            color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* Data */}
      <div className='Data'>
        <div className='innerData'>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        </div>
        <div className='Data'>
          {data.map((element, index) => {
            return (
              <div key={index} className='innerData'>
                <h5>{element.name}</h5>
                <h5>{element.email}</h5>
                <Stack>
                  <Button onClick={() => deleteItem(index)} variant="outlined" color="error">
                    <DeleteIcon />
                  </Button>
                </Stack>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
