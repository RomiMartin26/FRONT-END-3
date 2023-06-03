import { useState } from 'react'

function Clase9() {
  const [numFav, setNumFav] = useState('')
  const [nombre, setNombre] = useState('')

  const [submitedValues, setSubmitedValues] = useState()
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (numFav <=0 || isNaN(numFav) ) {
      setError('Ingresar un numero mayor a 0')
      return
    }        
    if (!nombre) {
        setError ("El campo nombre no debe estar vacio")
        return
    }
    
    else {
      setError('')
      setSubmitedValues({
        numFav,
        nombre
      })
      setNumFav('')
      setNombre('')
      
    }
  }

  function handleChangeNumFav(e) {
    setNumFav(e.target.value)
  }

  function handleChangeNombre(e){
    setNombre(e.target.value)
  }

  return (
    <div className="flex-col">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="numeroFavorito">Numero Favorito</label>
          <input
            id="numeroFavorito"
            placeholder="Ingrese su numero favorito"
            value={numFav}
            //onChange={() => setName ('')}
            onChange={handleChangeNumFav}
          />
        </div>

        <div className="flex">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            placeholder="Ingrese su nombre"
            value={nombre}
            //onChange={() => setName ('')}
            onChange={handleChangeNombre}
          />
        </div>


        {error ? <p>{error}</p> : undefined}

        <button type="submit">Submit</button>
      </form>
      {submitedValues ? (
        <div>
          <p> Tu Numero Favorito es: {submitedValues.numFav}</p>
          <p> Nombre: {submitedValues.nombre}</p>
        </div>
      ) : undefined}
    </div>
  )
}
export default Clase9
