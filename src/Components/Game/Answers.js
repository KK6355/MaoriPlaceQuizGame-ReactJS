import { useEffect, useState } from "react";
import Results from "./Results";
import classes from "./Answers.module.css";

const Answers = (props) => {
  console.log(props.answer, props.question);
  const [selectAnswer, setSelectAnswer] = useState("");
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [correctQuestions, setCorrectQuestions] = useState([]);
  const [correctNumer, setCorrectNumer] = useState(0);
  const [wrongQuestions, setWrongQuestion] = useState([]);
  const [wrongNumer, setWrongNumer] = useState(0);
  const answersOption = props.answers.sort().map((item) => (
    <option value={item} key={Math.random() * 10000}>
      {item}
    </option>
  ));

  const selectHandler = (e) => {
    setSelectAnswer(e.target.value);
    if (e.target.value === props.answer) {
      setAnswerIsCorrect(true);
      setScore((score) => score + 1);
      if (correctQuestions.includes(props.question)) {
        setCorrectQuestions([...correctQuestions]);
        setCorrectNumer(correctQuestions.length);
      } else {
        setCorrectQuestions([...correctQuestions, props.question]);
        setCorrectNumer(correctQuestions.length + 1);
      }
    } else {
      setAnswerIsCorrect(false);
      if (wrongQuestions.includes(props.question)) {
        setWrongQuestion([...wrongQuestions]);
        setWrongNumer(wrongQuestions.length);
      } else {
        setWrongQuestion([...wrongQuestions, props.question]);
        setWrongNumer(wrongQuestions.length + 1);
      }
    }
  };
  const clearResultsHandler = () => {
    setCorrectQuestions([]);
    setWrongQuestion([]);
    setScore(0);
    setWrongNumer(0);
    setCorrectNumer(0);
    setSelectAnswer("");
  };
  //   const checkAnswerHandler = (e) => {
  //

  //   };
  console.log(props.answer, selectAnswer, answerIsCorrect);
  console.log(correctQuestions, wrongQuestions);
  useEffect(() => {
    setSelectAnswer("");
    setAnswerIsCorrect(false);
  }, [props.question]);

  const selectStyle = `${
    answerIsCorrect
      ? classes.select_form_correct
      : selectAnswer === ""
      ? classes.select_form
      : classes.select_form_wrong
  }`;

  return (
    <div className={classes.answers}>
      <form>
        <div className={classes.select_form_lable}>
          <label>The English Name of this place is</label>
        </div>
        <div>
          <select
            onChange={selectHandler}
            value={selectAnswer}
            className={selectStyle}
          >
            <option value="">Choose your answer from dropdown list</option>
            {answersOption}
          </select>
        </div>
      </form>

      {/* {selectAnswer && (answerIsCorrect ? <p>correct</p> : <p>wrong</p>)} */}
      <Results
        score={score}
        correctQuestions={correctQuestions}
        wrongQuestions={wrongQuestions}
        correctNumer={correctNumer}
        wrongNumer={wrongNumer}
      />
      {correctNumer || wrongNumer ? (
        <button onClick={clearResultsHandler} className={classes.clear_button}>
          Clear Results
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Answers;
