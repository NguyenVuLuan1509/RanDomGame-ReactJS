import { useState, useEffect } from "react";
import Body from "./body";
import Header from "./header";
function RandomNumber(prop) {
  // Khai báo state data
  const [randomNumber, setRandomNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [numberOfGuesing, setnumberOfGuesing] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [message, setmessage] = useState("");
  // lifecycle mouting
  const mouting = () => {
    randomFunction();
  };

  useEffect(() => {
    mouting();
    if (numberOfGuesing > 7) {
      alert("Bạn thua rồi");
      newGame();
    }
  }, [numberOfGuesing]);
  //  nếu [numberOfGuesing] => mouting sẽ gọi mỗi khi numberOfGuesing thay đổi
  const randomFunction = () => {
    console.log(Math.random());
    let random = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(random);
  };

  const onChangeValue = (event) => {
    setInputValue(parseInt(event.target.value));
    console.log(event);
  };
  const guess = () => {
    setnumberOfGuesing(numberOfGuesing + 1); // bất đồng bộ
    if (inputValue === randomNumber) {
      setCorrect(true);

      newGame();
      alert("Bạn đoán đúng rồi");
    } else {
      if (inputValue > randomNumber) {
        setmessage("Số bạn đoán lớn quá");
      }
      if (inputValue < randomNumber) {
        setmessage("Số bạn đoán nhỏ quá");
      }

      setCorrect(false);
    }
  };

  const newGame = () => {
    randomFunction();
    setInputValue(0);
    setnumberOfGuesing(0);
    setmessage("");
  };

  const props = {
    randomNumberKey: randomNumber,
    correctKey: correct,
  };
  return (
    <div>
      <Header randomNumberKey={randomNumber} correctKey={correct} />
      {/* Body */}
      <Body
        numberOfGuesing={numberOfGuesing}
        inputValue={inputValue}
        message={message}
        newGame={newGame}
        onChangeValue={onChangeValue}
        guess={guess}
      />
      <p>{prop.data}</p>
    </div>
  );
}

export default RandomNumber;
