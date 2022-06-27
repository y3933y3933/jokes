import classes from "./Card.module.css";

const Card = ({ back = "", front = "" }) => {  return (
    <label className={classes.wrapper}>
      <input type="checkbox" />
      <div className={classes.card}>
        <div className={classes.front}>{front}</div>
        <div className={classes.back}>{back}</div>
      </div>
    </label>
  );
};

export default Card;
