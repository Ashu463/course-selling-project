
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BasicCard from './Card';
import { Card, Typography } from '@mui/material';
import { useState } from 'react';
function Addcourse(){
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    return (
      <div >
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
              <TextField id="title" label="CourseName" variant="filled" fullWidth onChange={(e) => {
                setTitle(e.target.value)
              }}/>
              <br /><br />
              <TextField id="Description" label="Description" variant="filled" fullWidth  onChange={(e) =>{
                setDescription(e.target.value)
              }}/>
              <TextField id="image" label="image-link" variant="filled" fullWidth  onChange={(e) =>{
                setImage(e.target.value)
              }}/>
              <br /><br />  
              <Button size='large' variant="contained" onClick={() => {

                fetch("http://localhost:3000/admin/courses", {
                    method : "POST",
                    body :JSON.stringify({
                      title, 
                      description,
                      image,
                      published : true
                    }),
                    headers: {
                      'CONTENT-TYPE': "application/json",
                      "Authorization" : "Bearer " + localStorage.getItem("token") 
                    }
  
                  }).then((res) => {
                    res.json().then((data) => {
                      console.log(data); 
                      alert("course added successfully")
                    })
                  })
                  
                  
                  
                  }}>Create Course</Button>
              </Card>
            </div>
        <div>
          {title}
          <br />
          {description}
        </div>
      </div>
    );
} 
export default Addcourse