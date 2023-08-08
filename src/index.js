const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arrOfTens = expr.match(/.{1,10}/g);
  const morseArray = arrOfTens.map((tenDigits) => {
    let str = tenDigits;
    if (tenDigits[0] === "0") {
      str = tenDigits.slice(tenDigits.indexOf("1"));
    }
    str = str.replaceAll("10", ".").replaceAll("11", "-");
    return str;
  });
  const result = morseArray
    .map((el) => (el === "**********" ? " " : MORSE_TABLE[el]))
    .join("");
  return result;
}

module.exports = {
  decode,
};
