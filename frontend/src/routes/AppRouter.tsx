import { Routes, Route } from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/first' element={<FirstPage />} />
        </Routes>
    );
}

export default AppRouter;