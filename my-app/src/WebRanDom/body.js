import React from "react";

export default function Body(props) {
  return (
    <div className="body">
      <button onClick={props.newGame}>New game</button>
      <hr />
      <p className="font-weight-bold">
        Số lần bạn đã đoán là: {props.numberOfGuesing}
      </p>
      <p className="font-weight-bold">Số bạn đoán là</p>
      <input
        value={props.inputValue}
        type="number"
        onChange={props.onChangeValue}
      />
      <button onClick={props.guess} className="btn-success">
        Đoán
      </button>
      <p>{props.message}</p>
    </div>
  );
}
