function Pedido (props){

 

    return (
        <li>
            <div className="flex">
                <div>{props.pedido}</div>
                <button onClick={props.eliminarPedido}>Eliminar Pedido</button>
            </div>
        </li>

    )
}
export default Pedido