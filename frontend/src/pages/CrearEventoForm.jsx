import React, { useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CrearEventoForm = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    description: '',
    startdate: '',
    price: '',
    capacity: '',
    location_id: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/event', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Evento creado');
      navigate('/');
    } catch (err) {
      alert('Error al crear el evento');
    }
  };

  return (
    <div>
      <h2>Crear Evento</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nombre" onChange={handleChange} required />
        <input name="description" placeholder="Descripción" onChange={handleChange} required />
        <input name="startdate" type="date" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Precio" onChange={handleChange} required />
        <input name="capacity" type="number" placeholder="Capacidad" onChange={handleChange} required />
        <input name="location_id" placeholder="ID de ubicación" onChange={handleChange} required />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearEventoForm;
