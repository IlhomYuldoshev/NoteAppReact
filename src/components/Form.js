import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext)

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show("Note has been added", "success");
      }).catch(() => {
        alert.show("Server Error", "danger");
      })
      setValue("");
    } else {
      alert.show("Please enter title name", "warning");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter note title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
