import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div class="container">
        <Header />
        <div class="galeria">
          <Card urlImagen="./src/assets/images/beagle.jpg" nombre="Bartolo" descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!" badge="Beagle" />
          <Card urlImagen="./src/assets/images/husky.jpg" nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!" badge="Husky" />
          <Card urlImagen="./src/assets/images/bulldog.jpg" nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Bulldog" />
          <Card urlImagen="./src/assets/images/dalmatia.jpg" nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Dalmata" />
          <Card urlImagen="./src/assets/images/labrador.jpg" nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Labrador" />
          <Card urlImagen="./src/assets/images/poodle.jpg" nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Poodle" />
          <Card urlImagen="./src/assets/images/yorkshire.jpg" nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Yorkshire" />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
