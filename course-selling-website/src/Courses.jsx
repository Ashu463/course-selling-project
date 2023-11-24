import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";



function Courses() {
    const [courses, setCourses] = useState([]) ; 
    const array = [
        { id: 1, name: 'John' ,name2 : 'bark'},
        { id: 2, name: 'Jane', name2 : 'shuu' },
        { id: 3, name: 'Mark', name2 : 'peee'},
       ];
       useEffect(() => {
           
           fetch("http://localhost:3000/admin/courses", {
            method : "GET",
            headers: {
                'CONTENT-TYPE': "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token") 
            }}).then((res) => {
                res.json().then((data) => {
                    console.log(data);
                    setCourses(data.courses);                    
                })
            })
    }, []);
    return (
        <div>
        <h1>dekho yeh pta kyu nhi bn rha </h1>
        {array[0].name}
        <br />
        {JSON.stringify(courses[0])}
        {/* {JSON.stringify(courses)} */}
        <br /><br /><br />
        {courses.map((course) => {
            return <Coursex course = {course} />
        })}
        </div>
    );
}

function Coursex(props){
    return <div style={{
        display : 'inline-flex',
    }}>

    <Card style={{
        margin : 10 ,
        width : 400 ,
        minHeight : 200
    }}>
        <Typography textAlign={"center"} variant="h5" >{props.course.id}</Typography> 
        <br />
        <Typography textAlign={"center"} variant="h5" >{props.course.description}</Typography> 
        <br />  
        <img src= {props.course.image} alt="cat image"style={{width : 300}} />
    </Card>
        </div>
}
export default Courses;