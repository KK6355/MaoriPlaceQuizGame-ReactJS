import classes from "./QuestionAndHint.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const QuestionAndHint = (props) => {
  return (
    <div className={classes.card}>
      <a
        href={`https://www.google.co.nz/maps/place/${props.question}/`}
        target="_blank"
        rel="noreferrer"
        title="see where it is"
      >
        <FontAwesomeIcon icon={faLocationDot} className={classes.icon} />
      </a>
      <p className={classes.question}>{props.question}</p>
      <p className={classes.hint}>Hint: {props.hint}</p>
    </div>
  );
};

export default QuestionAndHint;
