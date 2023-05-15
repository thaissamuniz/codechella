import Footer from "components/Footer";
import MainContent from "pages/MainContent";
import MenuDesk from "components/MenuDesk";
import { BrowserRouter, Route, Routes } from "react-router-dom"; import ExperienceScreen from "pages/ExperienceScreen";
import InfoScreen from "pages/InfoScreen";
import TicketScreen from "pages/TicketScreen";
import SectorMap from "pages/SectorMap";
import BuyTicketScreen from "pages/BuyTicketScreen";
;


function AppRoutes() {
    return (
        <BrowserRouter>
            {/* <MenuDesk /> */}
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/aexperiencia" element={<ExperienceScreen />} />
                <Route path="/mapa-setores" element={<SectorMap />} />
                <Route path="/informacoes" element={<InfoScreen />} />
                <Route path="/ingresso" element={<TicketScreen />} />
                <Route path="/comprar-ingresso" element={<BuyTicketScreen />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;