import Big from "big.js"
import operate from "./operate"
import isNumber from "./isNumber"

export default function operations (state, nameButton) {

   if (isNumber(nameButton)) {
      if (nameButton == "0" && state.siguiente == "0") return {}
      if (state.operador) {
         if (state.siguiente) return {siguiente: state.siguiente + nameButton}
         return { siguiente: nameButton }
      } 

      if (state.siguiente) {
         const siguiente = state.siguiente === "0" ? nameButton : state.siguiente + nameButton;
         return { siguiente, total: null }
      }

      return { siguiente: nameButton, total: null }
   }

   switch (nameButton) {
      case "AC": {
         return {
            total: null,
            siguiente: null,
            operador: null
         }
      }

      case "%": {
         if (state.operador && state.siguiente) {
            const result = operate(state.total, state.siguiente, state.operador)
            return { total: Big(result).div(Big("100")).toString(), siguiente: null, operador: null }
         }

         if (state.siguiente) {
            return { siguiente: Big(state.siguiente).div(Big("100")).toString() }
         }

         return {}
      }

      case ".": {
         if (state.siguiente) {
            if (state.siguiente.includes(".")) return {}
            return { siguiente: state.siguiente + "." }
         }
      
         return { siguiente: "0." }
      }

      case "=": {
         console.log(state)
         if (state.siguiente && state.operador) {
            return {
              total: operate(state.total, state.siguiente, state.operador),
              siguiente: null,
              operador: null,
            }
          } else return {}
      }

      case "+/-": {
         if (state.siguiente) return { siguiente: (-1 * parseFloat(state.siguiente)).toString() }
         if (state.total) return { total: (-1 * parseFloat(state.total)).toString() }
         return {}
      }
   }

   if (state.operador) {
      return {
        total: operate(state.total, state.siguiente, state.operador),
        siguiente: null,
        operador: nameButton,
      }
   }
  
   if (!state.siguiente) return { operador: nameButton }

   return {
      total: state.siguiente,
      siguiente: null,
      operador: nameButton,
   }
}