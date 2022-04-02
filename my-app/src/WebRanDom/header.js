import React from "react";

export default function Header(props) {
  return (
    <div
      style={{ backgroundColor: props.correctKey ? "green" : "gray" }}
      className="jumbotron text-center"
    >
      <h1>Getting random number</h1>
      <p>
        Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán được?
      </p>
      {/*Hiển thị số random */}
      <p>{props.randomNumberKey}</p>  
    </div>
  );
}