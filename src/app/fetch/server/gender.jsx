"use client";
import React, { useState } from "react";

function Gender({ gender }) {
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show)
    show ? setInfo(gender) : setInfo("");
  };

  return (
    <>
      <button onClick={handleClick}>Check Gender</button>
      <p>{info}</p>
    </>
  );
}

export default Gender;
