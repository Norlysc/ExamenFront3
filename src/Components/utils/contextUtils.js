// src/Components/utils/contextUtils.js

export const initialState = {
  theme: 'light', // El tema inicial puede ser 'light' o 'dark'
  dentists: [],   // Almacena la lista de dentistas
};

// Reducer que maneja las acciones del estado global
export const reducer = (state, action) => {
  switch (action.type) {
    // Alternar entre los temas 'light' y 'dark'
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };

    // Establecer la lista de dentistas
    case 'SET_DENTISTS':
      return {
        ...state,
        dentists: action.payload,  // 'payload' debe ser un array con los dentistas
      };

    // Acción predeterminada si no hay match con el tipo de acción
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
};
