import React from 'react'
import NavBar from './components/Navbar/NavBar'
import Header from './components/Header/Header'
import ContactForm from './components/Form/ContactForm';
import About from './components/About/About';
import Hobbies from './components/Hobbies/Hobbies';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Header />
     <Hobbies />
     <About />
     <ContactForm />
     <Footer />
    </div>
  );
}

export default App;
