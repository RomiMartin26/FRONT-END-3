function Title (props){
    console.log(props)
    return (

        <>

        <h1 id={props.miId} className="components-title">
            
            { props.elTitulo }
        </h1>
        {props.children}
        </>

    )
}
export default Title