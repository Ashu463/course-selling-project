import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card,Typography, TextField, Button } from "@mui/material";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function Course(){
    let { courseId } = useParams();
    
    
    // const [coursesarr, setCoursesarr] = useState([]) ;
    const setCourses = useSetRecoilState(courseState) ;


    useEffect(() => {
        
        fetch("http://localhost:3000/admin/courses", {
            method : "GET",
            headers: {
                'CONTENT-TYPE': "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token")
            }}).then((res) => {
                    res.json().then((data) => {
                      console.log(data.courses);
                      setCourses(data.courses);
                      
                    })
                  })
    }, []);
    // console.log(coursesarr)
    // let course = null;
    // for(var i = 0 ; i < coursesarr.length ; i++){
    //     if(coursesarr[i].id == courseId){
    //         // console.log("i am running")
    //         course = coursesarr[i];
    //     }
    // }
    // if(!course){
    //     return <div>
    //         Loading...
    //     </div>
    // }
    return (
        <div>
            <h1>hi</h1>
            <Coursecard courseId = {courseId} /> 
            <Updatecard courseId = {courseId} />
        </div>
    );
}
function Updatecard(props){
    const [course, setCourse] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const course_single = props.course;
    const [coursearr, setCoursesarr] = useRecoilState(courseState);
    // console.log("update card k baad ka item");
    // console.log(course_single)  
    console.log("Update card re-rendered")
    return (
      <div style={{
        display : 'flex',
        justifyContent : 'center'
      }}>

        <Card variant='outlined' style={{width: 400, padding : 10}}>
            <Typography>Update course</Typography>
              <TextField id="course" label="CourseName" variant="filled" fullWidth onChange={(e) => {
                setCourse(e.target.value)
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
                console.log(course)
                fetch("http://localhost:3000/admin/courses/" + props.courseId, {
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
                    // console.log(data); 
                    let updatecourse = [];
                    console.log(course)
                    for(var i = 0 ; i < coursearr.length ; i++){
                      if(coursearr[i].id == props.courseId){
                        updatecourse.push({
                          id : props.courseId,
                          course : course, 
                          description : description ,
                          image : image 
                        })
                      }else{
                        updatecourse.push(coursearr[i]);
                      }
                    }
                    setCoursesarr(updatecourse);
                  })
                })
                
                
                
              }}>Update Course</Button>
              </Card>
        </div>
    );
}
function Coursecard(props){
  // const course = props.course ; 
  // console.log(course)
    const courses = useRecoilValue(courseState);
    let course = null;
        for(var i = 0 ; i < courses.length ; i++){
            if(courses[i].id == props.courseId){
                // console.log("i am running")
                course = courses[i];
            }
        }
    console.log("course card re-rendered")
    if(!course){
      return "Loading..."
    }
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

const courseState = atom({
  key: 'courseState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});