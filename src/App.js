
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import SobreMi from './components/SobreMi';
import Contacto from './components/Contacto';
import NavBarJorge from './layouts/Navbar';
import PaginaSanatorio from './components/PaginaSanatorio';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBarJorge />}>
      <Route index element={<Inicio />}/>
      <Route path='SobreMi' element={<SobreMi />}/>
      <Route path='PreguntasFrecuentes' element={<PreguntasFrecuentes />}/>
      <Route path='Contacto' element={<Contacto />}/>
      <Route path='PaginaSanatorio' element={<PaginaSanatorio/>}></Route>
  
    
      <Route path='*' element={ <Navigate replace to="/"/>}/>
    </Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
