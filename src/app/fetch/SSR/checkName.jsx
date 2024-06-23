"use client";
import React, { useState } from "react";

function CheckName({ name }) {
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show)
    show ? setInfo(name) : setInfo("");
  };

  return (
    <>
      <button onClick={handleClick}>Check Name</button>
      <p>{info}</p>
    </>
  );
}

export default CheckName;
