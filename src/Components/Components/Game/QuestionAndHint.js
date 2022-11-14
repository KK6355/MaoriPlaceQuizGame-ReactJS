import classes from "./QuestionAndHint.module.css";

const QuestionAndHint = (props) => {
  return (
    <div className={classes.card}>
      <p className={classes.question}>{props.question}</p>
      <p className={classes.hint}>Hint: {props.hint}</p>
    </div>
  );
};

export default QuestionAndHint;
