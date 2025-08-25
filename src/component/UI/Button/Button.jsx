import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button style={{
      backgroundColor: props.bgColor || 'black',
      color: props.txtColor || 'white',
    }} className={styles.button} onClick={props.onClick}>
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;