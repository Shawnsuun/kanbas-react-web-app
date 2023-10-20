import db from "../../Database";
import { useParams } from "react-router-dom";
import './index.css';

function SearchBar({ placeholder }) {
    return (
        <div className="search-bar-container">
            <input type="text" placeholder={placeholder} className="form-control" />
        </div>
    );
}

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <h1>Grades</h1>


            <div className="d-flex mb-3">
                <select className="form-select">
                    <option value="GRADEBOOK" selected>Gradebook</option>
                    <option value="OTHERS">Others</option>
                </select>
                <button className="btn btn-primary">
                    <i className="fas fa-file-import"></i> Import
                </button>
                <div className="btn-group">
                    <button className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                        <i className="fas fa-file-export"></i> Export
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Export</a>
                        <a className="dropdown-item" href="#">Export All</a>
                    </div>
                </div>
                <button className="btn btn-warning">
                    <i className="fas fa-cogs"></i> Configure
                </button>
            </div>
            <div className="search-filter-section">
                <SearchBar placeholder="Search Students" />
                <SearchBar placeholder="Search Assignments" />
                <button className="btn btn-secondary mt-e">Apply Filters</button>
            </div>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;
