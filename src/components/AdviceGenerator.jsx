import React, { useEffect, useState } from "react";
import Divider from "../images/pattern-divider-desktop.svg";
import Mobile from "../images/pattern-divider-mobile.svg";
import "../components/styles.css";

export default function AdviceGenerator() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setText(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const refreshAdvice = () => {
    setText((text) => fetchAdvice());
  };

  return (
    <>
      <div className="conteiner">
        <p>ADVICE ID # {text.id}</p>
        <h1>“{text.advice}”</h1>
        <img src={Divider} className="desktop"></img>
        <img src={Mobile} className="mobile"></img>
        <button onClick={refreshAdvice}></button>
      </div>
    </>
  );
}
