import './home.css';
import Nav from '../../components/nav/nav.js';
import Imagenindex from '../../components/imgindex/imgindex.js';
import Descripcion from '../../components/descripcion/descripcion.js';
import Feature from '../../components/features/FeaturesConte.js';
import Mapa from '../../components/mapa/mapa.js';
import Cards from '../../components/cards/cards.js';
import Footer from '../../components/footer/footer.js';

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