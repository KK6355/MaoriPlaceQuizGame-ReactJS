import classes from "./Results.module.css";
const Results = (props) => {
  const correctList = props.correctQuestions.map((item) => (
    <li key={Math.random() * 10000}>{item}</li>
  ));
  const wrongList = props.wrongQuestions.map((item) => (
    <li key={Math.random() * 10000}>{item}</li>
  ));
  return (
    <div className={classes.layout}>
      <div className={classes.score}>
        <p className={classes.score_label}>Your score :</p>
        <p className={classes.score_number}>{props.score}</p>
      </div>
      <div className={classes.summary}>
        <div>
          <div className={classes.summary_correct}>
            <p className={classes.summary_label}>Correct </p>
            <button className={classes.summary_button}>
              {props.correctNumer}{" "}
            </button>
          </div>
          {/* <ul>{correctList}</ul> */}
        </div>
        <div>
          <div className={classes.summary_wrong}>
            <p className={classes.summary_label}>wrong </p>
            <button className={classes.summary_button}>
              {props.wrongtNumer}
            </button>
          </div>
          {/* <ul>{wrongList}</ul> */}
        </div>
      </div>
    </div>
  );
};

export default Results;
