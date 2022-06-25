import classes from "./Header.module.css";
import ClownIcon from "../../Icon/Clown";

const Header = () => {
  return (
    <header className={classes.header}>
      <ClownIcon className={classes.logo} />
      <h1 className={classes.title}>Jokes, please?</h1>
    </header>
  );
};

export default Header;
