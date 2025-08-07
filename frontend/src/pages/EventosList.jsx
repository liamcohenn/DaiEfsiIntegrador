import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import EventoCard from '../components/EventoCard';

const EventosList = () => {
  const [eventos, setEventos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchEventos = async () => {
    const res = await api.get(`/event?page=${page}`);
    setEventos(res.data);
  };

  useEffect(() => {
    fetchEventos();
  }, [page]);

  return (
    <div>
      <h2>Eventos</h2>
      {eventos.map(evento => (
        <EventoCard key={evento.id} evento={evento} />
      ))}
      <div>
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Anterior</button>
        <button onClick={() => setPage(p => p + 1)}>Siguiente</button>
      </div>
    </div>
  );
};

export default EventosList;
