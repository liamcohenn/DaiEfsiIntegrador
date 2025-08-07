import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const MisEventos = () => {
  const { token } = useAuth();
  const [eventos, setEventos] = useState([]);

  const fetchMisEventos = async () => {
    const res = await api.get('/event/mine', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setEventos(res.data);
  };

  const eliminarEvento = async (id) => {
    try {
      await api.delete(`/event/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEventos(eventos.filter(ev => ev.id !== id));
    } catch {
      alert('Error al eliminar');
    }
  };

  useEffect(() => {
    fetchMisEventos();
  }, []);

  return (
    <div>
      <h2>Mis Eventos</h2>
      {eventos.map(ev => (
        <div key={ev.id}>
          <h4>{ev.name}</h4>
          <button onClick={() => eliminarEvento(ev.id)}>Eliminar</button>
          {/* Si querés editar, podés agregar botón que lleve a una vista de edición */}
        </div>
      ))}
    </div>
  );
};

export default MisEventos;
