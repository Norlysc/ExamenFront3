import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ContextProvider} from './Components/utils/global.context';
import './index.css'; 


// Componente principal de la aplicación
function AppContent() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Componente raíz envuelto en el ContextProvider
function App() {
  return (
    <ContextProvider>
      <Router>
        <AppContent />
      </Router>
    </ContextProvider>
  );
}

export default App;
