import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NoOrder from "../Pages/NoOrder";
import Order from "../Pages/Order";

export default function BasicExample() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<NoOrder />} />
                    <Route path="/:id" element={<Order />} />
                </Routes>
            </div>
        </Router>
    );
}