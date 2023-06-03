import { useState } from 'react'

function Repaso() {
  const [name, setName] = useState('')
  const [edad, setEdad] = useState (0)

  const [submitedValues, setSubmitedValues] =useState('')
  const [error, setError] = useState('')

  //Evitar que se recargue la pagina cada vez que se
  //apriete boton submit

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form Submited')

    //validations
    if(!name){
        setError('Name is requiered')
        return
    }
    else {
        setError ()

        //enviar informacion
        setSubmitedValues({
            name,
            edad,
        })
        setName('')
        setEdad('')

    }


  }

  function handleChangeName(e){
    setName(e.target.value)
  }
  function handleChangeEdad(e){
    setEdad(e.target.value)
  }




  return (

    <div className="flex-col">
      Formulario
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Ingrese su nombre"
            value={name}
            //onChange={() => setName ('')}
            onChange= {handleChangeName}
          />
        </div>

        <div className="flex">
          <label htmlFor="edad">Edad</label>
          <input
            id="edad"
            type="number"
            placeholder="Ingrese su edad"
            value={edad}
            //onChange={() => setName ('')}
            onChange= {handleChangeEdad}
          />
        </div>

        {error ? <p>{error}</p> : undefined}

        <button type="submit">Submit</button>
      </form>
      {submitedValues ? (
        <div>
        <p>Nombre: {submitedValues.name}</p>
        <p>Edad: {submitedValues.edad}</p>
        </div>
      ) : undefined}
    </div>
  )
}
export default Repaso
