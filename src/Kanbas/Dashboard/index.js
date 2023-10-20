import { Link } from "react-router-dom";  // Link import is unused. You might want to remove it if not used elsewhere.
import db from "../Database";
import CourseCard from "./CourseCard";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="mx-xs-1 mx-md-2 mx-lg-3 flex-grow-1">
      <DashboardHeader />
      <PublishedCourses courses={courses} />
    </div>
  );
}

const DashboardHeader = () => (
  <>
    <h1>Dashboard</h1>
    <hr />
  </>
);

const PublishedCourses = ({ courses }) => (
  <div className="ms-md-3">
    <h2>Published Courses ({courses.length})</h2>
    <hr />
    <CourseList courses={courses} />
  </div>
);

const CourseList = ({ courses }) => (
  <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-start" id="wd-course-cards-container">
    {courses.map(course => <CourseCard key={course._id} course={course} />)}
  </div>
);

export default Dashboard;
