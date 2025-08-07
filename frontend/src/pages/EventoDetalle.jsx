import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const EventoDetalle = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchEvento = async () => {
      const res = await api.get(`/event/${id}`);
      setEvento(res.data);
    };
    fetchEvento();
  }, [id]);

  const inscribirse = async () => {
    try {
      await api.post(`/event/${id}/enrollment`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Inscripción exitosa');
    } catch {
      alert('Error al inscribirse');
    }
  };

  const cancelar = async () => {
    try {
      await api.delete(`/event/${id}/enrollment`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Inscripción cancelada');
    } catch {
      alert('Error al cancelar');
    }
  };

  if (!evento) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{evento.name}</h2>
      <p>{evento.description}</p>
      <p>Fecha: {evento.startdate}</p>
      <p>Ubicación: {evento.location_name}</p>
      <p>Tags: {evento.tags?.join(', ')}</p>
      {token && (
        <>
          <button onClick={inscribirse}>Inscribirme</button>
          <button onClick={cancelar}>Cancelar inscripción</button>
        </>
      )}
    </div>
  );
};

export default EventoDetalle;
