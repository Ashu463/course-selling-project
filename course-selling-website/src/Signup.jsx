
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BasicCard from './Card';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
function Signup(){
    const [email, setEmail] = useState("zolo-ryan");
    const [password, setPassword] = useState("dekh lo password")
    return (
      <div >
        {email}
        <br />
        {password}
        <center>
          <div style={{
            paddingTop: 150,
            marginBottom : 10
          }}>
            <Typography variant='h6'>Welcome to CourseEra. Sign up below</Typography>
            
          </div>
        </center>
        <div style={{display : 'flex', justifyContent : 'center'}}>
        
              <Card variant='outlined' style={{width: 400, padding : 10}}>
              <TextField id="username" label="Email" variant="filled" fullWidth onChange={(e) => {
                setEmail(e.target.value)
              }}/>
              <br /><br />
              <TextField id="password" label="Password" variant="filled" fullWidth type='password' onChange={(e) =>{
                setPassword(e.target.value)
              }}/>
              <br /><br />  
              <Button size='large' variant="contained" onClick={() => {

                let username = document.getElementById("username").value;
                let password = document.getElementById("password").value;
                console.log(username)
                console.log(password)
                fetch("http://localhost:3000/admin/signup", {
                  method : "POST",
                  body :JSON.stringify({
                    username,
                    password
                  }),
                  headers: {
                    'CONTENT-TYPE': "application/json"
                  }

                }).then((res) => {
                  res.json().then((data) => {
                    localStorage.setItem("token", data.token);
                    window.location = '/'
                  })
                })
              }}>Sign Up</Button>
              </Card>
            </div>
        
      </div>
    );
} 
export default Signup