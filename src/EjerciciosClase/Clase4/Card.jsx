import styles from './CssCard.module.css'

function Card (props) {
    console.log(props)
    return (
        <>
        <div className="flex-column">
            <p>{props.children}</p>
            <h1 className={styles.h1}>{props.title}</h1>
            <h3>{props.footer}</h3>
        </div>
        </>
    )
}
export default Card