import React, { useReducer } from "react";

interface DrawerContext {
  state: { DrawerOpen: boolean };
  handleDrawerStatus: () => void;
}

const DrawerContext = React.createContext<DrawerContext>({
  state: { DrawerOpen: false },
  handleDrawerStatus: () => {},
});

const drawerReducer = (state, action) => {
  switch (action.type) {
    case "handleDrawerStatus":
      let DrawerOpen = !state.DrawerOpen;
      state = { DrawerOpen };
      return state;
  }
};

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drawerReducer, { DrawerOpen: false });

  const handleDrawerStatus = (): any => {
    dispatch({ type: "handleDrawerStatus" });
  };

  return (
    <DrawerContext.Provider value={{ state, handleDrawerStatus }}>
      {children}
    </DrawerContext.Provider>
  );
};
export default DrawerContext;
