import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Nopage from './Pages/Nopage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  index element={<Home/>}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='*' element={<Nopage />} />
      </Routes>
      
    </div>
  );
}

export default App;
