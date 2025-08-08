import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{display:'flex', gap:12, padding:12, borderBottom:'1px solid #ddd'}}>
      <Link to="/">Eventos</Link>
      {user && (
        <>
          <Link to="/crear-evento">Crear evento</Link>
          <Link to="/ubicaciones">Ubicaciones</Link>
          <Link to="/mis-eventos">Mis eventos</Link>
        </>
      )}
      <div style={{marginLeft:'auto'}}>
        {user ? (
          <>
            <span style={{marginRight:10}}>Hola, {user.first_name}</span>
            <button onClick={handleLogout}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/login">Ingresar</Link>
            <span style={{margin:'0 6px'}}>|</span>
            <Link to="/register">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}
