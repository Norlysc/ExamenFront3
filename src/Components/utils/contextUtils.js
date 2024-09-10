// src/Components/utils/contextUtils.js

export const initialState = {
  theme: 'light', // O 'dark', según tu configuración predeterminada
  dentists: [], // Suponiendo que estás guardando una lista de dentistas
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
      return state;
  }
};
