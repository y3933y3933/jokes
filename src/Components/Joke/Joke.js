import classes from "./Joke.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { firebaseApp as app } from "../../config/config";
import { get, getDatabase, ref, child } from "firebase/database";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const db = getDatabase(app);
const dbRef = ref(db);

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    setIsLoading(true);
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
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={classes.container}>
      <Card front={joke?.front} back={joke?.back} />
      <Button onClick={fetchJokes}>Next</Button>
      {isLoading && <Loading/>}
    </div>
  );
};

export default Joke;
