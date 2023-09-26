import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ImageOne from './assets/ImageOne.jpg';
import ImageTwo from './assets/ImageTwo.jpg';
import Antena from './assets/antena.gif';
import Swal from 'sweetalert2';
import BtnClose from './assets/btn-close.svg'
import './App.css';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isCartaOpen, setIsCartaOpen] = useState(false);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === '' && password === '') {
      setLoggedIn(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos',
      });
    }
  };

  const toggleCarta = () => {
    setIsCartaOpen(!isCartaOpen);
  };

  return (
    <>
      {!loggedIn && (
        <div className="login">
          <div className="login-box">
            <h2>Ingreso</h2>
            <form onSubmit={handleLogin}>
              <div className="user-box">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Usuario</label>
              </div>
              <div className="user-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Contraseña</label>
              </div>
              <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                ENTRAR
              </button>
            </form>
          </div>
        </div>
      )}

      {loggedIn && (
        <>
          <div className={`${isCartaOpen ? 'carta-box-open' : 'carta-box-close'}`}>
            <button onClick={toggleCarta} className="close-button">
             <img src={BtnClose}/>
            </button>
          </div>
          <div
            className="container"
            style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '60px',
            }}
          >
            <h1 style={{ textAlign: 'center' }}>
              Con tu guía, conquistamos cualquier desafío
            </h1>
            <div className="gallery">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={ImageOne} style={{ height: '100%', width: '100%' }} />}
                itemTwo={<ReactCompareSliderImage src={ImageTwo} style={{ height: '100%', width: '100%' }} />}
              />
            </div>
            <img src={Antena} className="antena" onClick={toggleCarta} />
          </div>
        </>
      )}
    </>
  );
};

export default App;
