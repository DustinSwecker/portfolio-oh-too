import { useState } from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/index.jsx';
import Home from './components/Home';
import Footer from './components/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";









function App() {
  return (
    <div>
      <Header />
        <Home />
      <Footer />
    </div>
        
       
        
  
  )
}

export default App
