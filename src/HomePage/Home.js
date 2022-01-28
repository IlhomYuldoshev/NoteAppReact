import React, {useContext, useEffect} from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";
import Alert from "../components/Alert";

const Home = () => {
  const {loading, notes, fetchNotes} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div className="container">
      <Alert/>
      <Form />
      <hr />

      {loading
        ? <Loader/>
        : <Notes notes={notes} />
      }
    </div>
  );
};

export default Home;
