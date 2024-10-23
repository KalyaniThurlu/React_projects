
import { useState } from "react";

export function Form() {
  const [userName, setUserName] = useState("");
  const [errorName, setErrorName] = useState("");

  const [number, setNumber] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  const [pwd, setPwd] = useState("");
  const [errorPwd, setErrorPwd] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); 

    
    if (!userName) {
      setErrorName("Name is required");
    } else if (userName === "John") {
      setErrorName("Name is matched");
    } else {
      setErrorName("");
    }

  
    
    if (pwd.length < 6) {
      setErrorPwd("Password must be at least 6 characters long");
    } else {
      setErrorPwd("");
    }

    
    const numberPattern = /^\+91\d{10}$/;
    if (!number.match(numberPattern)) {
      setErrorNumber("Mobile number must start with +91 and be 10 digits long");
    } else {
      setErrorNumber("");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "userName") {
      setUserName(value);
    } else if (name === "mobile") {
      setNumber(value);
    } else if (name === "pwd") {
      setPwd(value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>UserName:</dt>
          <dd>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
            />
            {errorName && <p style={{ color: "red" }}>{errorName}</p>}
          </dd>

          <dt>Password:</dt>
          <dd>
            <input
              type="password"
              name="pwd"
              value={pwd}
              onChange={handleChange}
            />
            {errorPwd && <p style={{ color: "red" }}>{errorPwd}</p>}
          </dd>

          <dt>Mobile:</dt>
          <dd>
            <input
              type="text"
              name="mobile"
              value={number}
              onChange={handleChange}
            />
            {errorNumber && <p style={{ color: "red" }}>{errorNumber}</p>}
          </dd>

          <button type="submit">Submit</button>
        </dl>
      </form>
    </div>
  );
}