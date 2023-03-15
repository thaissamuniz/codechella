import './App.css';
import Header from './components/Header';
// import Banner from './components/Banner';
// import MainContent from './components/MainContent';
import Footer from './components/Footer';
import BuyTicketScreen from './components/BuyTicketScreen';

// import ImageDn from './components/ImageDn';
// import bannerImg from './img/Banner - Homepage.svg';
// import ExperienceScreen from './components/ExperienceScreen';


function App() {
  return (
    <div className="App">
      <Header />
      <BuyTicketScreen />
      <Footer />
    </div>
  );
}

export default App;
