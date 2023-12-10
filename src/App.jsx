import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdetifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdetifier]: newValue * 1,
      };
    });
  };

  const isInputValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {isInputValid ? (
        <Results userInput={userInput} isInputValid={isInputValid} />
      ) : (
        <p className="center">Please enter a duration greater than zero </p>
      )}
    </>
  );
}

export default App;
