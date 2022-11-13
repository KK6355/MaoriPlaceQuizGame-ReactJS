const QuestionAndHint = (props) => {
  return (
    <div>
      <h3>{props.question}</h3>
      {props.question && <p>Hint: {props.hint}</p>}
    </div>
  );
};

export default QuestionAndHint;
