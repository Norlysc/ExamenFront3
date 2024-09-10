import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ContextProvider, useAppContext } from './Components/utils/global.context';

function App() {
  const { state } = useAppContext(); // Obtener el estado del contexto global

  return (
    <Router>
      <ContextProvider>
        <div className={`${state.theme === 'dark' ? 'bg-dark text-white' : 'bg-lightGray text-black'}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;