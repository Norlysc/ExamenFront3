import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ContextProvider, useAppContext } from './Components/utils/global.context';
import './index.css'; // Importa tu archivo CSS aquí
import { useEffect } from 'react';

// Componente principal de la aplicación
function AppContent() {
  const { state } = useAppContext(); // Obtener el estado del contexto global

  useEffect(() => {
    // Aplica o quita la clase 'dark' del body según el estado del tema
    document.body.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

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
