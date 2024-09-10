// src/Components/utils/global.context.jsx

import { createContext, useReducer, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './contextUtils'; // Asegúrate de que el archivo 'contextUtils' exista

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(ContextGlobal);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};
