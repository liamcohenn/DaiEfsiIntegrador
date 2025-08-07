import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import EventosList from './pages/EventosList';
import EventoDetalle from './pages/EventoDetalle';
import CrearEventoForm from './pages/CrearEventoForm';
import MisEventos from './pages/MisEventos';
import UbicacionesList from './pages/UbicacionesList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventosList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/eventos/:id" element={<EventoDetalle />} />
        <Route path="/crear-evento" element={<CrearEventoForm />} />
        <Route path="/mis-eventos" element={<MisEventos />} />
        <Route path="/ubicaciones" element={<UbicacionesList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
