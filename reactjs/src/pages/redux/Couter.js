import { useContext } from "react";
import { couterContext } from "../store/CouterContex";
import ShowCouter from "./ShowCouter";

function Couter() {
  const couter = useContext(couterContext);

  return (
    <div>
      <h2>Couter: {couter.couter}</h2>
      <button onClick={couter.handldeIncrease}>Increase</button>
      <ShowCouter />
    </div>
  );
}

export default Couter;
