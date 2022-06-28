import classes from "./Card.module.css";
import { forwardRef } from "react";

const Card = forwardRef((props, ref) => {
  return (
    <label className={classes.card}>
      <input type="checkbox" className={classes.checkbox} ref={ref} />
      <div className={classes.inner}>
        <div className={classes["pixel-top"]}></div>
        <div className={classes["pixel-bottom"]}></div>

        <div className={classes.front}>{props.front}</div>
        <div className={classes.back}>{props.back}</div>
      </div>
    </label>
  );
});

export default Card;
