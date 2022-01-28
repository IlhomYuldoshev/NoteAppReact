import React, {useEffect, useState} from "react";
import {TransitionGroup} from "react-transition-group";
import {createNotes} from "./createNotesFunc";

const Notes = ({ notes }) => {
  const [notesHtml, setNotesHtml] = useState("")

  useEffect(() => {
    setNotesHtml(createNotes(notes))
  }, [notes])

  return (
    <TransitionGroup component="ul" className="list-group">
      {notesHtml}
    </TransitionGroup>
  );
};

export default Notes;
