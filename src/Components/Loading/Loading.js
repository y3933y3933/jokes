import classes from "./Loading.module.css";
import ReactDOM from "react-dom";
import { ReactComponent as Spinner } from '../../assets/icon/spinner.svg'



const Loading = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop}>
            <Spinner/>
        </div>,
        document.querySelector("#loading")
      )}
    </>
  );
};



export default Loading;
