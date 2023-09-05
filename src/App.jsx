
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
          <Card urlImagen="https://cdn.pixabay.com/photo/2023/05/20/16/48/dog-8006839_1280.jpg" nombre="Bartolo" descripcion="Lleno de energía y listo para jugar. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Beagle" colorBadge="success" />
          <Card urlImagen="https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_1280.jpg" nombre="Messi"
            descripcion="Es jueguetón, amigable y se lleva bien con niños y otros animales. !Haz de Messi parte de tu familia hoy mismo!" badge="Husky" colorBadge="danger" />
          <Card urlImagen="https://cdn.pixabay.com/photo/2020/07/20/06/42/english-bulldog-5422018_1280.jpg" nombre="Gohan"
            descripcion="Un perrito de tamaño mediano que se adapta a cualquier ambiente. !Dale a Gohan el hogar amoroso que se merece!"
            badge="Bulldog" colorBadge="warning" />
          <Card urlImagen="https://cdn.pixabay.com/photo/2021/05/09/10/51/dalmatian-6240486_1280.jpg" nombre="Princesa"
            descripcion="Es una compañera muy amigable. !Dale a Princesa el hogar amoroso que se merece!"
            badge="Dalmata" colorBadge="primary" />
          <Card urlImagen="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_1280.jpg" nombre="Ronaldo"
            descripcion="Un gran amigo y compañero. !Dale a Ronaldo el hogar amoroso que se merece!"
            badge="Labrador" colorBadge="warning" />
          <Card urlImagen="https://cdn.pixabay.com/photo/2022/07/12/17/12/dog-7317820_1280.jpg  " nombre="Gaston"
            descripcion="Fiel y serio, listo para jugar. !Dale a Gaston el hogar amoroso que se merece!"
            badge="Poodle" colorBadge="success" />
          <Card urlImagen="https://cdn.pixabay.com/photo/2020/01/21/16/26/yorkshire-terrier-4783327_1280.jpg" nombre="Yorki"
            descripcion="Regalon, amigable y muy cariñoso. !Dale a Bartolo el hogar amoroso que se merece!"
            badge="Yorkshire" colorBadge="secondary" />
        </div>
        <Footer /> { /* Uso componente Footer */}
      </div>
    </>
  )
}

export default App
