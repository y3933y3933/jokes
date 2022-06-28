import classes from "./Card.module.css";

const Card = ({ back = "", front = "" }) => {
  return (
    <label className={classes.card}>
      <input type="checkbox" className={classes.checkbox} />
      <div className={classes.inner}>
        <div className={classes['pixel-top']}></div>
        <div className={classes['pixel-bottom']}></div>

        <div className={classes.front}>{front}</div>
        <div className={classes.back}>{back}</div>
      </div>
    </label>
  );
};

export default Card;
