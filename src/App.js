import { About } from './components/About/About';
import { Client } from './components/Client/Client';
import { Contact } from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import { Product } from './components/Product/Product';
import { Service } from './components/Service/Service';
import { Technology } from './components/Technology/Technology';
import './css/base.css'

function App() {
  return (
    <>
        <Hero />
        <Service/>
        <Product />
        <Technology />
        <About />
        <Client/>
        <Contact />
    </>
  );
}

export default App;
