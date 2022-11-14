import { useEffect, useState } from "react";
import classes from "./Results.module.css";
const Results = (props) => {
  const [scoreIsHighlighted, setScoreIsHighlighted] = useState(false);
  const [correctIsHighlighted, setCorrectIsHighlighted] = useState(false);
  const [wrongIsHighlighted, setWrongIsHighlighted] = useState(false);
  const scoreClasses = `${classes.score_number} ${
    scoreIsHighlighted ? classes.bump : ""
  }`;
  const correctButtonClasses = `${classes.summary_button} ${
    correctIsHighlighted ? classes.bump : ""
  }`;
  const wrongButtonClasses = `${classes.summary_button} ${
    wrongIsHighlighted ? classes.bump : ""
  }`;
  const correctList = props.correctQuestions.map((item) => (
    <li key={Math.random() * 10000}>{item}</li>
  ));
  const wrongList = props.wrongQuestions.map((item) => (
    <li key={Math.random() * 10000}>{item}</li>
  ));
  //create a bump animation for score
  useEffect(() => {
    setScoreIsHighlighted(true);

    const timer = setTimeout(() => {
      setScoreIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [props.score]);
  useEffect(() => {
    setCorrectIsHighlighted(true);

    const timer = setTimeout(() => {
      setCorrectIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [props.correctNumer]);
  useEffect(() => {
    setWrongIsHighlighted(true);

    const timer = setTimeout(() => {
      setWrongIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [props.wrongtNumer]);
  return (
    <div className={classes.layout}>
      <div className={classes.score}>
        <p className={classes.score_label}>Your score :</p>
        <p className={scoreClasses}>{props.score}</p>
      </div>
      <div className={classes.summary}>
        <div>
          <div className={classes.summary_correct}>
            <p className={classes.summary_label}>Correct </p>
            <button className={correctButtonClasses}>
              {props.correctNumer}{" "}
            </button>
          </div>
          {/* <ul>{correctList}</ul> */}
        </div>
        <div>
          <div className={classes.summary_wrong}>
            <p className={classes.summary_label}>wrong </p>
            <button className={wrongButtonClasses}>{props.wrongtNumer}</button>
          </div>
          {/* <ul>{wrongList}</ul> */}
        </div>
      </div>
    </div>
  );
};

export default Results;
