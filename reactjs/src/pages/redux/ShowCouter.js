import { useContext } from "react";
import { couterContext } from "../store/CouterContex";

function ShowCouter() {
  const couter = useContext(couterContext);
  return (
    <div>
      <h3>ShowCouter: {couter.couter}</h3>
    </div>
  );
}

export default ShowCouter;
