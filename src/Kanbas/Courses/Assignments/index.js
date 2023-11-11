import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBook, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments,
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex-grow-1">
        <div className="d-flex flex-row">
          <div className="search flex-grow-1">
            <input
              type="text"
              className="form-control w-25"
              placeholder="Search for an Assignment"
            />
          </div>
          <div className="d-flex float-end main-content-control">
            <div className="flex-grow-1"></div>
            <button className="btn">
              <FaPlus />
              Group
            </button>
            <button
              onClick={() =>
                dispatch(
                  setAssignment({
                    title: "",
                    description: "",
                    points: "",
                    dueDate: "",
                    availableFrom: "",
                    availableUntil: "",
                  }),
                  window.location.assign(
                    `/#/Kanbas/Courses/${courseId}/Assignments/New`,
                  ),
                )
              }
              className="btn btn-danger"
            >
              <FaPlus />
              Assignment
            </button>
            <button className="btn">
              <FaEllipsisVertical />
            </button>
          </div>
        </div>

        <hr />
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary">
            <FontAwesomeIcon icon={faGripVertical} />
            <span>
              <strong>Assignments</strong>
            </span>
            <div className="float-end">
              <button className="btn rounded-pill">20 % of Total</button>
              <FaPlus />
              <FaEllipsisVertical />
            </div>
          </li>
          <ul className="list-group">
            {assignments
              .filter((module) => module.course === courseId)
              .map((assignment) => (
                <li className="list-group-item" key={assignment.id}>
                  <div className="flex-container">
                    <div className="float-end">
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Delete this assignment?",
                            )
                          ) {
                            dispatch(deleteAssignment(assignment.id));
                          }
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <FontAwesomeIcon icon={faGripVertical} />
                    <FaBook />
                    <span>
                      <strong>
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment.id}`}
                          style={{ color: "black" }}
                        >
                          <strong>{assignment.title}</strong>
                        </Link>
                      </strong>
                    </span>
                    <div>
                      <span>{assignment?.description}</span>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Assignments;