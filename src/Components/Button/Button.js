import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      <div className={classes["pixel-top"]}></div>
      <div className={classes["pixel-bottom"]}></div>
      {props.children}
    </button>
  );
};

export default Button;
