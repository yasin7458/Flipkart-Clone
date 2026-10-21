import { Routes, Route } from "react-router-dom";

import Login from "./authentication/Login";
import ProtectedRoute from "./authentication/ProtectedRoute";

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to ShopKart!</h1>
            <p>You have successfully logged in.</p>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;