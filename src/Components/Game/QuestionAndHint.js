const QuestionAndHint = (props) => {
  return (
    <div>
      <button onClick={props.ongetAQuesion}>Get A Random Place</button>
      <h3>{props.question}</h3>
      {props.question && <p>Hint: {props.hint}</p>}
    </div>
  );
};

export default QuestionAndHint;
