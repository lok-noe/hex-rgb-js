import "./css/style.css";
import * as looe from "./looeLib.js";

const textRGBElement = document.querySelector("#color-rgb");
const textHexElement = document.querySelector("#color-hex");

const buttonRightElement = document.querySelector("#button-right");
const buttonLeftElement = document.querySelector("#button-left");

const formElement = document.getElementById("form");

function adaptHexValue(hexValue) {
  const adaptedHexValue = looe.getRghtSubstring(`0${hexValue}`, 2);
  return adaptedHexValue;
}

function convertRGBToHex(textRGBElement) {
  const rgbColor = textRGBElement.value;
  if (rgbColor.trim() === "") {
    return;
  }
  const redCommaPosition = looe.getSubstringPosition(rgbColor, ", ", 0);
  const greenCommaPosition = looe.getSubstringPosition(
    rgbColor,
    ",",
    redCommaPosition + 1
  );
  const lastBracketPosition = looe.getSubstringPosition(
    rgbColor,
    ")",
    greenCommaPosition + 1
  );

  const redRGBColor = rgbColor.substring(1, redCommaPosition);
  const greenRGBColor = rgbColor.substring(
    redCommaPosition + 1,
    greenCommaPosition
  );
  const blueRGBColor = rgbColor.substring(
    greenCommaPosition + 1,
    lastBracketPosition
  );

  let redHexColor = looe.convertDecimalToHex(Number(redRGBColor));
  redHexColor = adaptHexValue(redHexColor);

  let greenHexColor = looe.convertDecimalToHex(Number(greenRGBColor));
  greenHexColor = adaptHexValue(greenHexColor);

  let blueHexColor = looe.convertDecimalToHex(Number(blueRGBColor));
  blueHexColor = adaptHexValue(blueHexColor);

  textHexElement.value = `#${redHexColor}${greenHexColor}${blueHexColor}`;

  formElement.style.backgroundColor = textHexElement.value;
}

buttonRightElement.addEventListener("click", () => {
  convertRGBToHex(textRGBElement);
});
