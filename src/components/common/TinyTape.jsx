import React from 'react';
import tinyTapeNoWheels from './../../assets/img/tiny_tape_nowheels.png';
import tinyTapeWheelRight from './../../assets/img/tiny_tape_wheel_right.png';
import tinyTapeWheelLeft from './../../assets/img/tiny_tape_wheel_left.png';
import './TinyTape.css';

function TinyTape(props){
  return (
    <div className="TinyTape">
      <img src={tinyTapeNoWheels} alt="tiny anthems casette tape" className="TinyTape-tape" />
      <img src={tinyTapeWheelLeft} alt="tape wheel" className="TinyTape-wheel-left"/>
      <img src={tinyTapeWheelRight} alt="tape wheel" className="TinyTape-wheel-right" />
    </div>
  );
}

export default TinyTape;
