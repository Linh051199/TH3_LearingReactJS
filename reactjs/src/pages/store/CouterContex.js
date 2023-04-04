import { createContext, useState } from "react";

const couterContext = createContext();

function CouterProvider({ children }) {
  const [couter, setCouter] = useState(0);

  const handldeIncrease = () => {
    setCouter(couter + 1);
  };
  const value = {
    couter,
    handldeIncrease,
  };
  return (
    <couterContext.Provider value={value}>{children}</couterContext.Provider>
  );
}

export { couterContext, CouterProvider };
