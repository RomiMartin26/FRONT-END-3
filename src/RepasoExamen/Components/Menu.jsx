import { useState } from "react"

function Menu ({agregarPedido}) {

    const [plato, setPlato] = useState ('')

    function handleSubmit (e){
        e.preventDefault ()
        if(!plato) return
        agregarPedido (plato)
        setPlato ('')
    
    }

    function onChange (e){
        setPlato(e.target.value)
    }


    return(
        <div className="flex-colum">
            <h2>Menu</h2>
            <form className="flex" onSubmit={handleSubmit}>
                <input
                type="text"
                value={plato}
                onChange={onChange}
                />
                <button type="submit">Agregar pedido</button>

            </form>
        </div>

    )
}
export default Menu