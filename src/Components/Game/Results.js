const Results = (props) => {
  const correctList = props.correctQuestions.map((item) => <li>{item}</li>);
  const wrongList = props.wrongQuestions.map((item) => <li>{item}</li>);
  return (
    <div>
      <h3>Your score :{props.score}</h3>
      <div>
        <p>{props.correctNumer} Correct Questions:</p>
        <ul>{correctList}</ul>
      </div>
      <div>
        <p>{props.wrongtNumer} wrong Questions:</p>
        <ul>{wrongList}</ul>
      </div>
    </div>
  );
};

export default Results;
