import classes from "./Header.module.css";
import ClownImg from '../../assets/img/clown.png'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={ClownImg} alt="clown" className={classes.logo}/>
      <h1 className={classes.title}>Jokes, please?</h1>
    </header>
  );
};

export default Header;
