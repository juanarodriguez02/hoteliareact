import './home.css';
import Nav from '../../Components/nav/nav.js';
import Imagenindex from '../../Components/imgindex/imgindex.js';
import Descripcion from '../../Components/descripcion/descripcion.js';
import Feature from '../../Components/features/FeaturesConte.js';
import Mapa from '../../Components/mapa/mapa.js';
import Cards from '../../Components/cards/cards.js';
import Footer from '../../Components/footer/footer.js';

function Home() {
  return (
    <div>
      <Nav />
      <Imagenindex />
      <Descripcion />
      <Feature />
      <Mapa />
      <Cards />
      <Footer />  
    </div>
  );
}

export default Home;