//import Title from "./Title"
function Header(props) {
    console.log(props)

  return (
    <>
      <header className={props.miClassName}>
        <h1>Header</h1>
      </header>
      <p>Hola</p>
      <p>{props.miName}</p>
   </>
  )
}
export default Header
