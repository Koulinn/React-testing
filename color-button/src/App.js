import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export const replaceCamelWithSpace = (CamelCaseColor) => {
  //regex => multiple times capital letter in the middle
  return CamelCaseColor.replace(/\B([A-Z])\B/g, ' $1')

}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: isChecked ? 'grey' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isChecked}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="control-btn-state"

        aria-checked={isChecked}
        defaultChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="control-btn-state" >Disable button</label>
    </div>
  );
}

export default App;
