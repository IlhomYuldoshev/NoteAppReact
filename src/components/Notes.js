import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import NoteItem from "./NoteItem";

const Notes = ({ notes }) => {
  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => {
        return (
          <CSSTransition
            key={note.id}
            classNames="note"
            timeout={750}
          >
            <NoteItem note={note}/>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default Notes;
