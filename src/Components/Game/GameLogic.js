import { useState } from "react";
import { quizData } from "../../Assets/data";
const GenerateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [hint, setHint] = useState("");
  // sort data
  const sortedData = [...quizData].sort();
  // console.log(sortedData);
  //get a random object from data
  const quizNum = sortedData.length;
  const quizIndex = Math.floor(Math.random() * quizNum);
  const randomQuiz = sortedData[quizIndex];

  const getAQuesion = () => {
    setQuestion(randomQuiz.Question);
    setHint(randomQuiz.Components);
  };

  return (
    <div>
      <button onClick={getAQuesion}>Get A Random Place</button>
      <h3>{question}</h3>
      {question && <p>Hint: {hint}</p>}
      {question && <p>The English Name of this place is:</p>}
    </div>
  );
};

export default GenerateQuestion;
