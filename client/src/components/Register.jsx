import React from "react";
import Button from "react-bootstrap/Button";
import "../styles/aac.css";
const Register = () => {
    return (
        <div>
            <link
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="aac.css" />
            {/* <link rel="stylesheet" href="aac.css" /> */}
            <div>
                <div className="wrapper" style={{}}>
                    <form action="">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Username"
                                required
                            />
                            {/* <i class='bx bx-user' ></i> */}
                        </div>
                        <div className="input-box">
                            <input type="gmail" placeholder="Email" required />
                            <i class="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                            />
                            <i class="bx bxs-lock-alt"></i>
                        </div>
                        {/* <div className="remember-forgot">
          <label><input type="checkbox" />Remember</label>
          <a href="#">Forgot Password</a>
        </div> */}
                        <div>
                            <Button
                                type="button"
                                className="btn"
                                style={{ marginLeft: 40, width: "40" }}
                            >
                                Register
                            </Button>
                        </div>
                        <div className="register-link">
                            <p>
                                already have an account
                                <a href="/Login"> Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;
