import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ImageOne from './assets/ImageOne.jpg'
import ImageTwo from './assets/ImageTwo.jpg'
import Antena from './assets/antena.gif'
import './App.css'

function App() {

  return (
    <>
      <div className='login'>
        <div className="login-box">
          <h2>Ingreso</h2>
          <form>
            <div className="user-box">
              <input type="text" name="" />
              <label>Usuario</label>
            </div>
            <div className="user-box">
              <input type="password" name="" />
              <label>Contraseña</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ENTRAR
            </a>
          </form>
        </div>
      </div>
      {/* _________________ */}
      <div className="carta-box">
      </div>
      <div className="container" style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "60px", }}>
        <h1 style={{ textAlign: "center" }}>Con tu guía, conquistamos cualquier desafío</h1>
        <div className='gallery'>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={ImageOne} style={{ height: "100%", width: "100%" }} />}
            itemTwo={<ReactCompareSliderImage src={ImageTwo} style={{ height: "100%", width: "100%" }} />}
          />
        </div>
        <img src={Antena} className='antena' />
      </div>

    </>
  )
}

export default App
