import { useState } from "react";
import './App.css'
import './icons/signup.jsx'

function App() {
  const [username, Username] = useState("");
  const [password, Password] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    console.log("Logging in with", { username, password });
  };

  return (
    <>
    
    <div className="wrapper">
      <form className="action">
        <h1>login</h1>
        <div className="username">
          <input type="username" name="username" id="username" placeholder="username" required minLength={8} />
          
        </div>
        <div className="username">
          <input type="password" name="password" id="password" placeholder="password" required minLength={6} />
        </div>
        <div className="remember">
          <input type="checkbox"></input>remember me

        </div>
        <div className="button">
          <button type="submit">login</button>
        </div>
        <div className="forgot">
          <p>forgot password? <a href="#">click here</a></p>
          <p>Don't have an account? <a href="signup.jsx">signup</a></p>
        </div>
      </form>

    </div>
    </>
  );
}

export default App;
