import { useEffect, useState } from "react";

let Discription = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const IntervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(IntervalID);
    };
  }, []);
  return (
    <>
      This is the current time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </>
  );
};

export default Discription;
