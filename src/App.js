
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CampaignList from './Pages/CampaignList';
import CampaignDetail from './Pages/CampaignDetail';
import CreateCampaign from './Pages/CreateCampaign';
import Login from './Pages/Login';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Terms from './Pages/Terms';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import DonationForm from './components/DonationForm';
import CampaignDetails from './Pages/CampaignDetail';
import PaymentOptions from './components/Payments';
import './App.css';
function App() {
  return (
    <Router>
      <div className="app-container">
      <Navbar/>
      <main className="content"> 
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/campaigns" element={<CampaignList/>}/>
      <Route path="/campaign/:id" element={<CampaignDetails/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/create-campaign" element={<CreateCampaign/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/donation" element={<DonationForm/>}/>
      <Route path="/payments" element={<PaymentOptions/>}/>
      </Routes>
      </main>
      <br></br>
      <br></br>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
