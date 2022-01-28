import {CSSTransition} from "react-transition-group";
import NoteItem from "./NoteItem";
import React from "react";

export const createNotes = (notes = []) => {
  return (
    <>
      {notes.length
        ? notes.map((note) => {
          return (
            <CSSTransition
              key={note.id}
              classNames="note"
              timeout={750}
            >
              <NoteItem note={note}/>
            </CSSTransition>
          );
        })
        : <div className="text-center">There is not any notes yet</div>
      }
    </>
  )
}
