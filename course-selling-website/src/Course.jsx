import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card,Typography, TextField, Button } from "@mui/material";
function Course(){
    let { courseId } = useParams();
    const [coursesarr, setCoursesarr] = useState([]) ; 
    useEffect(() => {
        
        fetch("http://localhost:3000/admin/courses", {
            method : "GET",
            headers: {
                'CONTENT-TYPE': "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token") 
            }}).then((res) => {
                    res.json().then((data) => {
                      console.log(data.courses);
                      setCoursesarr(data.courses);
                      
                    })
                  })
    }, []);
    let course = null;
    console.log(coursesarr)
    for(var i = 0 ; i < coursesarr.length ; i++){
        if(coursesarr[i].id == courseId){
            // console.log("i am running")
            course = coursesarr[i];
        }
    }
    if(!course){
        return <div>
            Loading...
        </div>
    }
    return (
        <div>
            <h1>hi</h1>
            <Coursecard course = {course} /> 
            <Updatecard course = {course} />
        </div>
    );
}
function Updatecard(props){
    const [course, setCourse] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const course_single = props.course
    console.log("update card k baad ka item");
    console.log(course_single)  
    return (
      <div style={{
        display : 'flex',
        justifyContent : 'center'
      }}>

        <Card variant='outlined' style={{width: 400, padding : 10}}>
            <Typography>Update course</Typography>
              <TextField id="title" label="CourseName" variant="filled" fullWidth onChange={(e) => {
                setCourse(e.target.value)
              }}/>
              <br /><br />
              <TextField id="Descriptiono" label="Description" variant="filled" fullWidth  onChange={(e) =>{
                setDescription(e.target.value)
              }}/>
              <TextField id="image" label="image-link" variant="filled" fullWidth  onChange={(e) =>{
                setImage(e.target.value)
              }}/>
              <br /><br />  
              <Button size='large' variant="contained" onClick={() => {
                console.log(title)
                fetch("http://localhost:3000/admin/courses/" + course_single.id, {
                  method : "PUT",
                  body :JSON.stringify({
                    description,
                    course,
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
                    alert("course Updated successfully2")
                  })
                })
                
                
                
              }}>Update Course</Button>
              </Card>
        </div>
    );
}
function Coursecard(props){
    const course = props.course ; 

    // console.log(course)
    return (
      <div style={{
        display : 'flex',
        justifyContent : 'center'
      }}>
        
    <Card style={{
      margin : 10 ,
      width : 500 ,
      minHeight : 200
    }}>
        <Typography textAlign={'center'}>{course.course}</Typography> 
        <br />  
        <Typography textAlign={"center"}>{course.description}</Typography> 
        <br />  
        <img src= {course.image} alt="cat image"style={{width : 300}} />
    </Card>
      </div>
    );
}
export default Course ; 