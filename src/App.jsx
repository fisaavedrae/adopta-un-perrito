
import Header from './components/Header'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import json from './assets/json/perritos.json'


function App() {

  return (
    <>
      <div className="container">
        <Header titulo="Adopta un perrito" /> { /* Uso componente Header */}
        <div className="galeria">
          { /* Uso de los componentes Card, la informacion de los perritos se encuentra en el archivo json, use este metodo para no tener codigo redundante. Adicionalmente deje un archivo App.jsx donde esta sin usar el json */}
          {json.map((perrito) => (
            <Card urlImagen={perrito.urlImagen} nombre={perrito.nombre} descripcion={perrito.descripcion} badge={perrito.badge} colorBadge={perrito.colorBadge} />
          ))}
        </div>
        <Footer /> { /* Uso componente Footer */}
      </div>
    </>
  )
}

export default App
