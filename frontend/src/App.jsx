import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import EventosList from './pages/EventosList';
import EventoDetalle from './pages/EventoDetalle';
import CrearEventoForm from './pages/CrearEventoForm';
import MisEventos from './pages/MisEventos';
import UbicacionesList from './pages/UbicacionesList';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{padding:16}}>
        <Routes>
          <Route path="/" element={<EventosList />} />
          <Route path="/eventos/:id" element={<EventoDetalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/crear-evento" element={<CrearEventoForm />} />
          <Route path="/mis-eventos" element={<MisEventos />} />
          <Route path="/ubicaciones" element={<UbicacionesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
