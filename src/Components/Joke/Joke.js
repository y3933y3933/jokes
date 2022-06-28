import classes from "./Joke.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { firebaseApp as app } from "../../config/config";
import { get, getDatabase, ref, child } from "firebase/database";
import { useEffect, useState, useRef } from "react";
import Loading from "../Loading/Loading";

const db = getDatabase(app);
const dbRef = ref(db);

const Joke = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = () => {
    setIsLoading(true);
    cardRef.current.checked = false;
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
        alert(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={classes.container}>
      <Card ref={cardRef} front={joke?.front} back={joke?.back} />
      <Button onClick={fetchJokes}>Next</Button>
      {isLoading && <Loading />}
    </div>
  );
};

export default Joke;
