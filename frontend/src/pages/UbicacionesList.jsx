import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const UbicacionesList = () => {
  const { token } = useAuth();
  const [ubicaciones, setUbicaciones] = useState([]);
  const [nombre, setNombre] = useState('');

  const fetchUbicaciones = async () => {
    const res = await api.get('/event-location', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUbicaciones(res.data);
  };

  const crearUbicacion = async () => {
    try {
      await api.post('/event-location', { name: nombre }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNombre('');
      fetchUbicaciones();
    } catch {
      alert('Error al crear ubicación');
    }
  };

  const eliminarUbicacion = async (id) => {
    try {
      await api.delete(`/event-location/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUbicaciones();
    } catch {
      alert('Error al eliminar ubicación');
    }
  };

  useEffect(() => {
    fetchUbicaciones();
  }, []);

  return (
    <div>
      <h2>Ubicaciones</h2>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nueva ubicación"
      />
      <button onClick={crearUbicacion}>Crear</button>
      <ul>
        {ubicaciones.map(u => (
          <li key={u.id}>
            {u.name} <button onClick={() => eliminarUbicacion(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UbicacionesList;
