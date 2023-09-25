import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ImageOne from './assets/ImageOne.jpg'
import ImageTwo from './assets/ImageTwo.jpg'
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
      <input type="password" name=""/>
      <label>Contraseña</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    </div>
      <div className="contenido" style={{ width: "100%", height: "100vh", display:"flex", flexDirection:"column", alignItems:"start", paddingTop:"30px" }}>
        <h1 style={{textAlign:"center"}}>Con tu guía, conquistamos cualquier desafío</h1>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={ImageOne} style={{height:"100%", width:"100%"}}/>}
          itemTwo={<ReactCompareSliderImage src={ImageTwo}  style={{height:"100%", width:"100%"}}/>}
        />

      </div>

    </>
  )
}

export default App
