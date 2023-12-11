import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    + + <Route path="/Register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
