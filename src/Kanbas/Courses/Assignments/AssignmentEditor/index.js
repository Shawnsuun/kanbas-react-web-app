import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import './index.css';
import { Button } from "react-bootstrap";
import { FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";
import {
  addAssignment,
  updateAssignment,
} from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";

const CourseAssignmentEditor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignmentId, courseId } = useParams();
  const assignments = useSelector(state => state.assignmentsReducer.assignments);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    points: "",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  useEffect(() => {
    const matchedAssignment = assignments.find(item => item.id === assignmentId);
    if (matchedAssignment) {
      setFormData(matchedAssignment);
    } else {
      setFormData({ ...formData, course: courseId });
    }
  }, [assignmentId, assignments, courseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    if (assignmentId) {
      dispatch(updateAssignment({ ...formData, id: assignmentId }));
    } else {
      dispatch(addAssignment({ ...formData, course: courseId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between mb-3">
            <div className="flex-grow-1"></div>
            <div className="d-flex float-end main-content-control">
              <div className="flex-grow-1"></div>
              <p>
                <FaCircleCheck /> Published
              </p>
              <Button>
                <FaEllipsisVertical />
              </Button>
            </div>
          </div>
          <div className="mb-3">
            <input
              name="title"
              type="text"
              className="form-control"
              value={formData.title}
              placeholder="Enter title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              value={formData.description}
              placeholder="Enter the Assignment Description"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <div className="col-2">Points</div>
            <div className="col-6">
              <input
                name="points"
                type="text"
                className="form-control"
                value={formData.points}
                placeholder="Enter the points"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-2">Due</div>
            <div className="col-6">
              <input
                name="dueDate"
                type="date"
                className="form-control"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
            <div className="row mt-2">
              <div className="col-6">
                Available From
                <input
                  name="availableFrom"
                  type="date"
                  className="form-control"
                  value={formData.availableFrom}
                  onChange={handleChange}
                />
              </div>
              <div className="col-6">
                Available Until
                <input
                  name="availableUntil"
                  type="date"
                  className="form-control"
                  value={formData.availableUntil}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="text-white text-decoration-none">
                Cancel
              </Link>
            </button>
            <button className="btn btn-danger" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAssignmentEditor;
