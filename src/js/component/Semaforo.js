import React, { useState } from "react";

function Semaforo() {
  const [color, setColor] = useState("red");

  return (
    <div className="top-50 start-50">
      <div
        id="traffic"
        className="bg-black rounded position-absolute start-50 top-50 translate-middle border border-danger-"
      >
        <div
          className={`red semaforo rounded-circle btn btn-danger me-5 ${
            color === "red" && "active"
          }`}
          type="button"
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`yellow semaforo rounded-circle btn btn-warning me-5 ${
            color === "yellow" && "active"
          }`}
          type="button"
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`green semaforo rounded-circle btn btn-success me-5 ${
            color === "green" && "active"
          }`}
          type="button"
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
}

export default Semaforo;
