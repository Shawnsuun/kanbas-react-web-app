import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import './ModuleList.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (

    <>
      <thead class="profile-header">
        <tr>
          <td colspan="3">

            <div class="actions">
              <button class="btn btn-secondary">Collapse All</button>
              <button class="btn btn-secondary">View Progress</button>
              <select>
                <option value="publish-all" selected>Publish All</option>
                <option value="publish-current">Publish Current</option>
              </select>
              <button class="btn btn-secondary">Module</button>
            </div>
            <hr />
          </td>
        </tr>
      </thead>


      <ul className="list-group">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item" id="modules">
                <div className="content-wrapper">
                  <h3>{module.name}</h3>
                  <div className="icons">
                    <span className="icon check-icon"></span>
                    <span className="icon plus-icon"></span>
                    <span className="icon dots-icon"></span>
                  </div>
                </div>
                <p>{module.description}</p>
              </li>
            ))
        }
      </ul></>
  );
}

export default ModuleList;




