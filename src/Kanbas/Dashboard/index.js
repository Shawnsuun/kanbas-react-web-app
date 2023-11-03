import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import CourseCard from "./CourseCard";


function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }
) {

    return (
      <div className="mx-xs-1 mx-md-2 mx-lg-3 flex-grow-1">
        <div>
          <h1>Dashboard</h1>
          <hr />
        </div>
  
        <h5>Course</h5>
        <input
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          className="form-control"
        />
        <input
          value={course.number}
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
          className="form-control"
        />
        <input
          value={course.startDate}
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          className="form-control"
        />
        <input
          value={course.endDate}
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          className="form-control"
        />
        <button onClick={addNewCourse} className="btn btn-success m-2 ms-0">
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-warning">
          Update
        </button>
  
        <div className="list-group">
          {courses.map((c) => (
            <div key={c._id} className="list-group-item">
              <Link to={`/Kanbas/Courses/${c._id}`}>{c.name}</Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteCourse(c._id);
                }}
                className="btn btn-danger float-end"
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCourse(c);
                }}
                className="btn btn-warning float-end me-2"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
  
        <div className="ms-md-3">
          <h2>Published Courses ({courses.length})</h2>
          <hr />
          <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-start" id="wd-course-cards-container">
            {courses.map((c) => (
              <CourseCard key={c._id} course={c} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  