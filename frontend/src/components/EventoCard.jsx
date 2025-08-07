import React from 'react';
import { Link } from 'react-router-dom';

const EventoCard = ({ evento }) => {
  return (
    <div className="card">
      <h3>{evento.name}</h3>
      <p>{evento.description}</p>
      <p>Fecha: {evento.startdate}</p>
      <p>Precio: ${evento.price}</p>
      <p>Lugar: {evento.location_name}</p>
      <p>Capacidad: {evento.capacity}</p>
      <Link to={`/eventos/${evento.id}`}>Ver más</Link>
    </div>
  );
};

export default EventoCard;
