import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Appbar(){
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState(); 
    useEffect(() =>{
        fetch("http://localhost:3000/admin/me", {
            method : "GET",
            headers : {
                "authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            res.json().then((data) =>{
                if(data.username){
                    setUserEmail(data.username);
                    
                }
            })
        })
    }, []);

    if(userEmail){
        return (
        <div style = {{
            display : 'flex',
            justifyContent : 'space-between', 
            padding : 4
        }}>

        <Typography variant='h4'>CourseEra</Typography>
        <div>
            <div>
                {userEmail}
            </div>
            <Button variant="contained" style={{margin : 10}} onClick={() =>{
                localStorage.setItem("token" , null);
                console.log("mai click ho chuka hu and abb tumahre paas ek brand new website aani chahiye ")
                window.location = "/signup";
            }}>Log Out</Button>
            
        </div>

    </div>

    );
    }



    return (
        <div style = {{
            display : 'flex',
            justifyContent : 'space-between', 
            padding : 4
        }}>

        <Typography variant='h4'>CourseEra</Typography>
        <div>
            <Button variant="contained" style={{margin : 10}} onClick={() =>{
                navigate('/signup')
            }}>Sign Up</Button>
            <Button variant="contained" onClick={() =>{
                navigate('/signin')
            }}>Sign In</Button>
        </div>

    </div>
    );
}
export default Appbar;