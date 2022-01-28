import React, {useState} from 'react';
import {authWithEmailAndPasswordAxios} from "../components/LoginAPI";

function Login({setIsLogin}) {
  const [emAndPas, setEmAndPas] = useState({})
  const [isInvalidInputs, setIsInvalidInputs] = useState(false)

  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      if (emAndPas.email.trim() && emAndPas.password.trim()) {
        const res = await authWithEmailAndPasswordAxios(emAndPas)
        // eslint-disable-next-line
        if(res.registered) {
          setIsLogin(true)
          setEmAndPas({email: "", password: ""})
        }
      }
    } catch (e) {
      setIsInvalidInputs(true)
      console.error("Serverda bunday user topilmadi" ,e)
    }
  }

  return (
    <div className="container">
      <div className="login-wrapper">
        <h1 className="text-center my-4">Login</h1>
        <form onSubmit={loginHandler} className="my-4 needs-validation">
          {isInvalidInputs
            ? (<div className="errLogin bg-danger bg-opacity-75 text-white text-center">
              The email address or password is incorrect,<br/>Please retry
            </div>)
            : null
          }
          <div className="form-group my-3">
            <label className="form-label" htmlFor="emailInput">Email: test@mail.ru</label>
            <input
              onChange={(e) => {
                setEmAndPas({...emAndPas, email: e.target.value})
              }}
              className="form-control"
              pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
              type="email"
              required
              id="emailInput"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="passwordInput">Password: hello1234</label>
            <input
              onChange={(e) => {
                setEmAndPas({...emAndPas, password: e.target.value})
              }}
              className="form-control"
              type="password"
              required
              id="passwordInput"/>
          </div>
          <button type="submit" className="btn btn-primary my-3">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
