import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Calculator() {

  
  return ( 
    <div className="calculator">

      <div className="display">{renderDisplay()}</div>

        <CalcButton onClick={handleOperator} className="operator" value="MC"/>
        <CalcButton onClick={handleOperator} className="operator" value="MR"/>
        <CalcButton onClick={handleOperator} className="operator" value="M+"/>
        <CalcButton onClick={handleOperator} className="operator" value="M-"/>
        <CalcButton onClick={handleOperator} className="operator" value="MS"/>
      
      <CalcButton onClick={handleClear} className="operator" value="AC"/>
      <CalcButton onClick={handleClear} className="operator" value="C"/>
      <CalcButton onClick={handleOperator} className="operator" value="("/>
      <CalcButton onClick={handleOperator} className= "operator" value=")"/>
      <CalcButton onClick={handleOperator} className="operator" value="%"/>

      <CalcButton  onClick={handleOperator} value="."/>
      <CalcButton onClick={handleNumber} value="0"/>
      <CalcButton onClick={handleOperator} className="operator" value="Sq"/>
      <CalcButton onClick={handleOperator} className="operator" value="Sqr"/>
      <CalcButton onClick={handleOperator} className="operator" value="/"/>

      <CalcButton onClick={handleNumber} value="7"/>
      <CalcButton onClick={handleNumber} value="8"/>
      <CalcButton onClick={handleNumber} value="9"/>
      <CalcButton onClick={handleOperator} className="operator" value="DEL"/>
      <CalcButton onClick={handleOperator} className="operator" value="*"/>

      <CalcButton onClick={handleNumber} value="4"/>
      <CalcButton onClick={handleNumber} value="5"/>
      <CalcButton onClick={handleNumber} value="6"/>
      <CalcButton onClick={handleOperator} value="ANS"/>
      <CalcButton onClick={handleOperator} className="operator" value="-"/>

      <CalcButton onClick={handleNumber} value="1"/>
      <CalcButton onClick={handleNumber} value="2"/>
      <CalcButton onClick={handleNumber} value="3"/>
      <CalcButton onClick={handleOperator} value="="/>
      <CalcButton onClick={handleOperator} className="operator" value="+"/>
    </div>
  )
}

function CalcButton(props) {
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}

ReactDOM.render(<div className="app-container"><Calculator/></div>,document.getElementById("root"));