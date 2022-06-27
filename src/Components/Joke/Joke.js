import classes from "./Joke.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { firebaseApp as app } from "../../Config/config";
import { get, getDatabase, onValue, ref, child } from "firebase/database";
import { useEffect, useState } from "react";

const db = getDatabase(app);
const dbRef = ref(db);

const Joke = () => {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    get(child(dbRef, "jokes/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const jokeList = snapshot.val();
          const randomIndex = Math.floor(Math.random() * jokeList.length);
          setJoke(jokeList[randomIndex]);
        } else {
          setJoke(null);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className={classes.container}>
      {joke && <Card front={joke.front} back={joke.back} />}
      <Button>Want another joke?</Button>
    </div>
  );
};

export default Joke;
