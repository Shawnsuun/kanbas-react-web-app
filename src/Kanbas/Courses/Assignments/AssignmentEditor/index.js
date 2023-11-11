import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAssignment } from "../assignmentsReducer";
import db from "../../../Database";
import './index.css';

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialize the assignment state
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });

  useEffect(() => {
    const assignmentData = db.assignments.find(a => a._id === assignmentId);
    if (assignmentData) {
      setAssignment(assignmentData);
    }
  }, [assignmentId]);

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h2>Edit Assignment</h2>
      <input 
        name="title"
        value={assignment.title || ''}
        onChange={handleChange}
        className="form-control mb-2" 
        placeholder="Title"
      />
      <textarea
        name="description"
        value={assignment.description || ''}
        onChange={handleChange}
        className="form-control mb-2"
        placeholder="Description"
      />
      <input 
        type="date"
        name="dueDate"
        value={assignment.dueDate || ''}
        onChange={handleChange}
        className="form-control mb-2" 
      />
      <input 
        type="date"
        name="availableFromDate"
        value={assignment.availableFromDate || ''}
        onChange={handleChange}
        className="form-control mb-2" 
      />
      <input 
        type="date"
        name="availableUntilDate"
        value={assignment.availableUntilDate || ''}
        onChange={handleChange}
        className="form-control mb-2" 
      />
      <hr />
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
      <hr />
    </div>
  );
}

export default AssignmentEditor;
