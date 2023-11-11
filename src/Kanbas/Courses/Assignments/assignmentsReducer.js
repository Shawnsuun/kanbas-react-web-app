import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
import { v4 as uuidv4 } from 'uuid'; // UUID for unique ID generation

const initialState = {
  assignments: [...db.assignments],
  assignment: {
    title: "",
    description: "",
    points: "",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Adds a new assignment with a unique UUID
    addAssignment: (state, action) => {
      state.assignments.unshift({
        ...action.payload,
        id: uuidv4(),
      });
    },
    // Deletes an assignment by ID
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        assignment => assignment.id !== action.payload,
      );
    },
    // Updates an existing assignment
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map(assignment =>
        assignment.id === action.payload.id ? action.payload : assignment
      );
    },
    // Sets the current assignment for editing
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
