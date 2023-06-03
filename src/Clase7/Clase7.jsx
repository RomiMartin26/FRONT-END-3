import Calculadora from "./Calculadora";

function Clase7 (){
    console.log (Calculadora)

    function miFunction (cant) {
        console.log("Pepe " + cant)

    }

    return (
        <Calculadora
        ammount = {6} 
        onEqual={miFunction}
        />
    )
}
export default Clase7