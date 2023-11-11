import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import './index.css';
import db from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  const handleNewAssignment = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  const handleDeleteAssignment = (assignmentId) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this assignment?");
    if (isConfirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <button onClick={handleNewAssignment} className="btn btn-primary">
        + Assignment
      </button>
      <div className="list-group" id="assignments">
        {courseAssignments.map((assignment) => (
          <div key={assignment._id} className="list-group-item">
            <div className="assignment-title">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                {assignment.title}
              </Link>
            </div>
            <button 
              onClick={() => handleDeleteAssignment(assignment._id)} 
              className="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Assignments;