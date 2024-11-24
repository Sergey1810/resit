import Home from './pages/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/contact' element={ <Contact/>}/>

       
       
      </Routes>
     
    </div>
  );
}

export default App;
