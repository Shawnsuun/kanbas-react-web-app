import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import React from "react";
import '../../index.css';
import TopCourseNavigation from "./TopCourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    console.log(API_BASE);
    const URL = `${API_BASE}/api/courses`;

    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
      const response = await axios.get(
        `${URL}/${courseId}`
      );
      setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]);
    
    return (
        <div>
            <TopCourseNavigation />
            <hr className="mb-3" />
            <div>
                <CourseNavigation courseId={courseId} />
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "70px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                                    <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses;
