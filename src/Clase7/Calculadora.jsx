import { useState } from "react"

function Calculadora ({ammount, onEqual}) {

    const [valor, setCalculadora] = useState (0)
    //setCalculadora (props.pepe)

   function Suma (){
    setCalculadora (valor + ammount)
   }

   function Resta (){
    setCalculadora (valor - ammount)
   }

   function Reset (){
   setCalculadora (0)
   }

   function Igual (){
    console.log (valor)
    onEqual (valor)
   }
        
    


    return (
        <div>
            <p>El valor de la calculadora es {valor}</p>
            <button onClick={Suma}>sumar</button>
            <button onClick={Resta}>resta</button>
            <button onClick={Igual}>igual</button>
            <button onClick={Reset}>Reset</button>

        </div>
    )

}
export default Calculadora