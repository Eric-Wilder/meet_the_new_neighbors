import React from "react";
import "./Form.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="formInfo form-group">
      <input className="formInfo form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="formInfo form-group">
      <textarea className="formInfo form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }} className="addResidents">
      {props.children}
    </button>
  );
}

export function UpdateBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="updateResidents">
      {props.children}
    </button>
  );
}

