

import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import RecipePage from "../pages/RecipePage/RecipePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
    )
}

export default AppRoutes;