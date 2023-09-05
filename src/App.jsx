
import Header from './components/Header'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div class="container">
        <Header titulo="Adopta un perrito" /> { /* Uso componente Header */}
        <div class="galeria">
          { /* Uso de los componentes Card */}
          <Card urlImagen="./src/assets/images/beagle.jpg" nombre="Bartolo" descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Beagle" colorBadge="success" />
          <Card urlImagen="./src/assets/images/husky.jpg" nombre="Messi"
            descripcion="Es jueguetón, amigable y se lleva bien con niños y otros animales. !Haz de Messi parte de tu familia hoy mismo!" badge="Husky" colorBadge="danger" />
          <Card urlImagen="./src/assets/images/bulldog.jpg" nombre="Gohan"
            descripcion="Un perrito de tamaño mediano que se adapta a cualquier ambiente. !Dale a Gohan el hogar amoroso que se merece!"
            badge="Bulldog" colorBadge="warning" />
          <Card urlImagen="./src/assets/images/dalmatia.jpg" nombre="Princesa"
            descripcion="Es una compañera muy amigable. !Dale a Princesa el hogar amoroso que se merece!"
            badge="Dalmata" colorBadge="primary" />
          <Card urlImagen="./src/assets/images/labrador.jpg" nombre="Ronaldo"
            descripcion="Un gran amigo y compañero. !Dale a Ronaldo el hogar amoroso que se merece!"
            badge="Labrador" colorBadge="warning" />
          <Card urlImagen="./src/assets/images/poodle.jpg" nombre="Gaston"
            descripcion="Fiel y serio, listo para jugar. !Dale a Gaston el hogar amoroso que se merece!"
            badge="Poodle" colorBadge="success" />
          <Card urlImagen="./src/assets/images/yorkshire.jpg" nombre="Bartolo"
            descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Yorkshire" colorBadge="secondary" />
        </div>
        <Footer /> { /* Uso componente Footer */}
      </div>
    </>
  )
}

export default App
