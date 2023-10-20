import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import "./CourseCard.css";

const defaultProps = {
    _id: "Unknown_id",
    name: "Unknown_name",
    number: "Unknown_number",
    startDate: "Unknown_startDate",
    endDate: "Unknown_endDate",
};

const CourseCard = ({ course = defaultProps }) => (
    <div className="col">
        <div className="card shadow-sm">
            <CourseImage />
            <CourseInfo course={course} />
        </div>
    </div>
);

const CourseImage = () => (
    <div className="card-img-top wd-course-solid-blue wd-course-img-height-125px d-flex flex-row">
        <button type="button" className="btn position-absolute top-0 end-0 right-0 m-2 wd-course-card-img-button-white">
            <FaEllipsisV />
        </button>
    </div>
);

const CourseInfo = ({ course }) => (
    <div className="card-body d-flex flex-column">
        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="mb-2 card-link wd-card-link-no-decoration">
            <div className="wd-course-card-header-content-container">
                <h6 className="card-title wd-ellipsis">{course.name}</h6>
                <h5 className="card-subtitle mb-2 text-muted">{course.number}</h5>
                <p className="card-text wd-ellipsis">{course.startDate} to {course.endDate}</p>
            </div>
        </Link>
        <Link key={course.number} to={"/Kanbas/Dashboard"} className="wd-course-card-icon-grey">
            <PiNotePencil />
        </Link>
    </div>
);

export default CourseCard;
