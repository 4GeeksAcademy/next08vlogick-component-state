import React from "react";

function Semaforo() {
  return (
    <div className="top-50 start-50">
      <div
        id="traffic"
        className="bg-black rounded position-absolute start-50 top-50 translate-middle border border-danger-"
      >
        <div
          id="red"
          className="rounded-circle  btn btn-danger me-5"
          type="button"
        ></div>
        <div
          id="red"
          className="rounded-circle btn btn-warning me-5"
          type="button"
        ></div>
        <div id="red" className="rounded-circle btn btn-success me-5"></div>
      </div>
    </div>
  );
}

export default Semaforo;
