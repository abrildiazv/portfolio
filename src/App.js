import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="App">
      <Navbar setPage={setCurrentPage}/>
      {currentPage === 'home' && <h1>HOME PAGE</h1>}
      {currentPage === 'catalog' && <h1>CATALOG PAGE</h1>}
      {currentPage === 'contact' && <h1>CONTACT PAGE</h1>}
    </div>
  );
}

export default App;
