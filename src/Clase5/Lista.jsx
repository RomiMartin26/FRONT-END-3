import styles from './Lista.module.css';

function List(props) {
  return (
    <ul className={styles.lista}>
      {props.children}
    </ul>
  );
}

export default List;