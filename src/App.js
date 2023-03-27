import './App.css';
import Header from './components/Header';
// import Banner from './components/Banner';
// import MainContent from './components/MainContent';
import Footer from './components/Footer';
// import TicketScreen from './components/TicketScreen';

// import ImageDn from './components/ImageDn';
// import bannerImg from './img/Banner - Homepage.svg';
// import ExperienceScreen from './components/ExperienceScreen';
import SectorMap from './components/SectorMap';


function App() {
  return (
    <div className="App">
      <Header />
      <SectorMap />
      <Footer />
    </div>
  );
}

export default App;
