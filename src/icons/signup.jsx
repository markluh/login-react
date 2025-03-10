import React from "react";

const signup = () => {
    return(
        <div className="wrapper">
            <form className="action">
                <div className="input-box">
                    <input type="text" name="email" id="email" placeholder="email" required minLength={8}>
                    </input>
                </div>
                <div className="input-box">
                    <input type="password" name="password" id="password" placeholder="password" required minLength={6}>
                    </input>
                    </div>
                <div className="input-box">
                    <input type="password" name="password" id="password" placeholder="confirm password" required minLength={6}>
                    </input>
                </div>
                <div className="button">
                    <button type="submit">signup</button>
                </div>
                <div className="check">
                    <input type="checkbox"></input>do you agree to our terms of service?
                </div>
                <div className="forgot">
                    <p>already have an account? <a href="#">login</a></p>
                    </div>
            </form>
        </div>
    )

}

export default signup;  