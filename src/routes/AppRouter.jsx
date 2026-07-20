import { BrowserRouter, Routes, Route } from "react-router-dom";

import Boot from "../pages/Boot";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Boot />}
                />
            </Routes>
        </BrowserRouter>
    );
}