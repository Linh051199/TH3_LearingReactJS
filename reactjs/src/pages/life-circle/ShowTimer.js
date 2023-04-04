import { useEffect, useState } from "react";

function ShowTimer() {
  const [timer, setTimer] = useState("--:--");

  useEffect(() => {
    let intervalTime = setInterval(() => {
      console.log("re-render");
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalTime);
  }, [timer]);
  return <h3>{timer}</h3>;
}

export default ShowTimer;
