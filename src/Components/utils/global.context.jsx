import { createContext, useReducer, useContext } from "react";

export const ContextGlobal = createContext({});

export const initialState = {
  theme: "light",
  FAVS: [],
};

// global para el cambio de color, light o dark
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const root = document.documentElement;
      if (state.theme === "dark") {
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
      }
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    }
    case "ADD_FAV": {
      const newFavs = [...state.FAVS, action.payload];
      console.log("Nuevo estado de FAVS:", newFavs);
      return { ...state, FAVS: newFavs };
    }

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  function changeTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  
  const contextValue = {
    ...state,
    dispatch,
    changeTheme,
  };

  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
