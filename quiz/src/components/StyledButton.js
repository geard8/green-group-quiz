import styles from './Button.module.css';

const StyledButton = (props) => {
    return (
     
        <div className={styles.button}>{props.title}</div>
    );
  };
  
  export default StyledButton;