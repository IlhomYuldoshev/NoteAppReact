import React, {useContext} from 'react';
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {AlertContext} from "../context/alert/alertContext";

function NoteItem({note}) {
  const {removeNote} = useContext(FirebaseContext)
  const alert = useContext(AlertContext)

  return (
    <li className="list-group-item notes-item">
      <div className="note-text-wrapper">
        <strong className="note-text">{note.title}</strong>
        <small className="note-date">
          {note.date}
        </small>
      </div>
      <button
        onClick={() => {
          removeNote(note.id)
          alert.show("Note has been removed", "secondary")
        }}
        className="btn btn-outline-danger btn-sm"
      >
        &times;
      </button>
    </li>
  );
}

export default NoteItem;
