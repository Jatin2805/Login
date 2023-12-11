import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "../styles/aac.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:3000/addProfile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                console.log("Registration successful");
            } else {
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration", error);
        }
    };

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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {/* <i className='bx bx-user' ></i> */}
                        </div>
                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <i className="bx bx-user"></i>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
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
                                onClick={handleRegister}
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
