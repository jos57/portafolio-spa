

import Navbar1 from './Navbar1.js';
import Header1 from './Header1.js';
import CardDiv from './conocimientos.js';
import Sobremi from './Sobremi.js';
import Contacto from './Contacto.js';

function App() {
  return (
    <div className="container-fluid justify-content-center vw-xl-100 vw-sm-100 vw-md-100 vw-lg-100 row m-0 no-gutters">
      <Navbar1 />
      <Header1 />
      <CardDiv />
      <Sobremi />
      <Contacto />
   
    </div>
  );
}

export default App;
