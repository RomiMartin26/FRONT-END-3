import { useState } from "react"
import Menu from "./Components/Menu"
import Pedido from "./Components/Pedido"
import {getId} from "./Utils/getId"

function RepasoExamen (){

    const [pedido, setPedido] = useState([])

    function agregarPedido (plato){
        const pedidoNuevo ={
            id: getId (),
            plato,
        }
        setPedido ([...pedido, pedidoNuevo])
    }
    
    function eliminarPedido (id) {
        const pedidoNuevo = pedido.filter((pedido) => pedido.id !==id)
        setPedido(pedidoNuevo)
    }

    return(
        <div className="flex flex-columnn">
            <Menu agregarPedido={agregarPedido} />
            
            <ul>
                {pedido.map((elemPedido) => {
                    return (
                        <Pedido 
                        key={elemPedido.id}
                        pedido={elemPedido.plato}
                        eliminarPedido={() => eliminarPedido(elemPedido.id)}
                        />
                    )
                })}
            </ul>
        </div>
        

    )
}
export default RepasoExamen
