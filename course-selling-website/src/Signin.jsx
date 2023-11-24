
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BasicCard from './Card';
import { Card, Typography } from '@mui/material';
function Signin(){

    return (
      <div >
        <center>
          <div style={{
            paddingTop: 150,
            marginBottom : 10
          }}>
            <Typography variant='h6'>Welcome back to CourseEra. Sign in below</Typography>
            
          </div>
        </center>
        <div style={{display : 'flex', justifyContent : 'center'}}>
        
              <Card variant='outlined' style={{width: 400, padding : 10}}>
              <TextField id="filled-basic" label="Email" variant="filled" fullWidth/>
              <br /><br />
              <TextField id="filled-basic" label="Password" variant="filled" fullWidth  />
              <br /><br />  
              <Button size='large' variant="contained">Sign In</Button>
              </Card>
            </div>
        
      </div>
    );
} 
export default Signin