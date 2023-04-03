import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const LOGIN_URL = "https://cors-anywhere.herokuapp.com/https://uptime.com/api/v1/auth/login/";

function Login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async (email, password) => {
    const res = await axios.post(LOGIN_URL, {
        code: 0,
        email: email,
        password: password
    });

    props.setUser({...res.data, email})
  }

  return (
    <div className="Login">
      <div className="Login-line">
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="Login-line">
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button onClick={() => login(email, password)}>Login</button>
    </div>
  );
}

export default Login;
