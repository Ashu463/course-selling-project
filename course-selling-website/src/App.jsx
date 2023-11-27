import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Appbar from './Appbar';
import Signin from './Signin';
import Admincourses from './Admincourses'
import Courses from './Courses';
import Course from './Course';
import Landing from './Landing';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
function App(){
    
    return (
      <div style={{height : "100vh", width : "100vw", backgroundColor: "#eeeeee"}}>
        
        <div>
          <RecoilRoot>
            <Router>
              <Appbar></Appbar>
              

              <Routes>
                <Route path='/' element = {<Landing />} />
                <Route path = '/courses' element = {<Courses />} />
                <Route path = '/courses/:courseId' element = {<Course />} />
                <Route path='/signin' element = {<Signin/>} />
                <Route path='/signup' element = {<Signup/>} />
                <Route path='/addcourses' element = {<Admincourses/>} />
              </Routes>
            </Router>
          </RecoilRoot>

        </div>
           
      </div>
    );
  
}
export default App;
