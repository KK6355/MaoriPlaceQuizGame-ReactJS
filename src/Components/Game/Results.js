import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Results.module.css";
const Results = (props) => {
  const [scoreIsHighlighted, setScoreIsHighlighted] = useState(false);
  const [correctIsHighlighted, setCorrectIsHighlighted] = useState(false);
  const [wrongIsHighlighted, setWrongIsHighlighted] = useState(false);
  const [modalCorrectIsShown, setModalCorrectIsShown] = useState(false);
  const [modalWrongIsShown, setModalWrongIsShown] = useState(false);
  const showCorrectModalHandler = () => {
    if (props.correctNumer > 0) {
      setModalCorrectIsShown(true);
    } else {
      setModalCorrectIsShown(false);
    }
  };
  const hideCorrectModalHandler = () => {
    setModalCorrectIsShown(false);
  };
  const showWrongModalHandler = () => {
    if (props.wrongNumer) {
      setModalWrongIsShown(true);
    } else {
      setModalWrongIsShown(false);
    }
  };
  const hideWrongModalHandler = () => {
    setModalWrongIsShown(false);
  };
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
  }, [props.wrongNumer]);
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
            <button
              className={correctButtonClasses}
              onClick={showCorrectModalHandler}
            >
              {props.correctNumer}
            </button>
          </div>
          {/* render modal list */}
          {modalCorrectIsShown && (
            <Modal onClose={hideCorrectModalHandler}>
              <div className={classes.modal_list}>
                <ul>
                  {correctList}
                  <button onClick={hideCorrectModalHandler}>close</button>
                </ul>
              </div>
            </Modal>
          )}
        </div>
        <div>
          <div className={classes.summary_wrong}>
            <p className={classes.summary_label}>wrong </p>
            <button
              className={wrongButtonClasses}
              onClick={showWrongModalHandler}
            >
              {props.wrongNumer}
            </button>
          </div>
          {/* render modal list */}
          {modalWrongIsShown && (
            <Modal onClose={hideWrongModalHandler}>
              <div className={classes.modal_list}>
                <ul>{wrongList}</ul>
                <button onClick={hideWrongModalHandler}>close</button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
