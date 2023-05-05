import './App.css';
// import Header from './components/Header';
// import Banner from './components/Banner';
import MainContent from './pages/MainContent';
import Footer from './components/Footer';
import HeaderDesk from './components/MenuDesk';
// import TicketScreen from './components/TicketScreen';

// import ImageDn from './components/ImageDn';
// import bannerImg from './img/Banner - Homepage.svg';
// import ExperienceScreen from './components/ExperienceScreen';
// import SectorMap from './components/SectorMap';
// import InfoScreen from './components/InfoScreen';
// import BuyTicketScreen from './components/BuyTicketScreen';


function App() {
  return (
    <div className="App">
      <MenuDesk />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
