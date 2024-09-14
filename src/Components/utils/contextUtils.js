

export const initialState = {
  theme: 'light', 
  dentists: [],   // Almacena la lista de dentistas
};


export const reducer = (state, action) => {
  switch (action.type) {
  
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };

    case 'SET_DENTISTS':
      return {
        ...state,
        dentists: action.payload, 
      };
 
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
};
