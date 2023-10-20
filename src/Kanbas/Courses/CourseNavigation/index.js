import { Link, useLocation, useParams } from "react-router-dom";
import db from "../../../Kanbas/Database";
import '../../../index.css';
import "./index.css";

// Static links that don't change, so place outside the component
const LINKS = [
    "Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", 
    "Grades", "People", "Panopto Video", "Credentials", "Progress Reports (EAB Navigate)"
];

function CourseNavigation() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    
    // Find the course based on the courseId from the params
    const course = db.courses.find(course => course._id === courseId);

    // If no course found, render an error message instead
    if (!course) {
        return <div>Course not found!</div>;
    }

    // Destructure properties from the course for better readability
    const { number, name, startDate } = course;

    return (
        <div className="wd-course-navigation">
            <div className="wd-ellipsis mb-3">
                {number} {name} {startDate}
            </div>
            <div className="list-group">
                {LINKS.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`list-group-item bg-transparent wd-course-navigation-item ${pathname.includes(link) ? "active wd-active" : ""}`}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CourseNavigation;
