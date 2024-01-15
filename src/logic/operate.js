import Big from "big.js"

export default function operate (number1st, number2nd, operator) {
   const uno = Big(number1st || "0")
   const dos = Big(number2nd || (operator == "/" || operator == "x" ? "1" : "0"))

   if (operator == "+") return uno.plus(dos).toString() // Sumar
   if (operator == "-") return uno.minus(dos).toString() // Restar
   if (operator == "x") return uno.times(dos).toString() // Multiplicar
   if (operator == "/") return uno.div(dos).toString() // Dividir
}