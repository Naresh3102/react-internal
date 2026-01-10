import { createContext } from "react";

// Create the context
const NameContext = createContext();

// Create a provider(Optional)
export const NameProvider = ({ children }) => {
  const name = "GB";
  return (
    <NameContext.Provider value={{ name, location: "Rasipuram" }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameContext;
