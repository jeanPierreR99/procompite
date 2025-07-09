import Aliance from './components/Aliance';
import ContactForm from './components/ContactForm';
import ProCompite from './components/ProCompite';
import Requisitos from './components/Requisitos';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Section1 />
      <Section2 />
      <Requisitos />
      <Section3 />
      <Section4 />
      <Section5 />
      <ContactForm />
      <ProCompite />
      <Aliance />
    </div>
  );
};

export default Home;