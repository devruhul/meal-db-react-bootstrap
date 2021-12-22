import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="meals" element={<Meals />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
