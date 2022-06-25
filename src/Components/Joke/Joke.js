import classes from "./Joke.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebaseConfig from "../../Config/config";

const Joke = () => {
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);


  return (
    <div className={classes.container}>
      <Card />
      <Button>Want another joke?</Button>
    </div>
  );
};

export default Joke;
