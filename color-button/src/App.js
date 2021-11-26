import "./App.css";
import { useState } from "react";
import { primaryColor, secColor } from "./App.test";

export const replaceCamelWithSpace = (CamelCaseColor) => {
  //regex => multiple times capital letter in the middle
  return CamelCaseColor.replace(/\B([A-Z])\B/g, ' $1')

}

function App() {
  const [buttonColor, setButtonColor] = useState(primaryColor);
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor = buttonColor === primaryColor ? secColor : primaryColor;
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
