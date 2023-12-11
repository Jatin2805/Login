import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/aac.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert("Login successful");
            } else {
                alert("Login failed. Please check your username and password.");
            }
        } catch (error) {
            console.error("Error during login", error);
        }
    };

    return (
        <div>
            <link
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="aac.css" />
            <div className="wrapper" style={{}}>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Button
                            type="button"
                            className="btn"
                            style={{ marginLeft: 40, width: "40" }}
                            onClick={handleLogin}
                        >
                            Login
                        </Button>
                    </div>
                    <div className="register-link">
                        <p>
                            Don't have an account?
                            <a href="/Register"> Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
