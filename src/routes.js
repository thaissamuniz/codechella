import Footer from "components/Footer";
import MainContent from "pages/MainContent";
import MenuDesk from "components/MenuDesk";
import { BrowserRouter, Route, Routes } from "react-router-dom";;


function AppRoutes() {
    return (
        <BrowserRouter>
            <MenuDesk />
            <Routes>
                <Route path="/" element={<MainContent />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;