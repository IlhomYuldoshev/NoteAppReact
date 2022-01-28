import React, {useContext, useEffect} from "react";
import { AlertContext } from "../context/alert/alertContext";
import {CSSTransition} from "react-transition-group"

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  useEffect(() => {
    if(alert.visible) {
      setTimeout(hide, 900)
    }
  }, [alert.visible])

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 600,
        exit: 300
      }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
    >
      <div className="container">
        <div
          className={`alert alert-${
            alert.type || "warning"
          } alert-dismissible d-flex justify-content-between`}
        >
          <strong>Attention!</strong>
          &nbsp; {alert.text}
          <button
            onClick={hide}
            type="button"
            className="close btn btn-outline-danger px-10 py-0"
            aria-label="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Alert;
