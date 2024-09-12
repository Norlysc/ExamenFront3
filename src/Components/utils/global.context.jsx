import { createContext, useReducer, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './contextUtils'; // Asegúrate de que este archivo esté correctamente configurado

// Crear el contexto global
const ContextGlobal = createContext();

// Proveedor del contexto global
export const ContextProvider = ({ children }) => {
  // Usar useReducer para manejar el estado y las acciones
  const [state, dispatch] = useReducer(reducer, initialState);

  // Memorizar el valor para evitar renders innecesarios
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Validar que el prop children sea pasado correctamente
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un ContextProvider');
  }
  return context;
};
