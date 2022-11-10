import { useState } from "react";
import { quizData } from "../../Assets/data";
import Answers from "./Answers";
import QuestionAndHint from "./QuestionAndHint";
const GenerateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [hint, setHint] = useState("");
  // const [answer, setAnswer] = useState("");
  // sort data
  const sortedData = [...quizData].sort();
  // console.log(sortedData);
  //get a random object from data
  const quizNum = sortedData.length;
  const quizIndex = Math.floor(Math.random() * quizNum);
  const randomQuiz = sortedData[quizIndex];
  const answers = sortedData.map((item) => item.Answer);

  const getAQuesionHandler = () => {
    setQuestion(randomQuiz.Question);
    setHint(randomQuiz.Components);
  };
  // const getAnswerHandler =()=>{

  // }

  return (
    <div>
      <QuestionAndHint
        question={question}
        hint={hint}
        ongetAQuesion={getAQuesionHandler}
      />
      {question && <Answers answers={answers} />}
    </div>
  );
};

export default GenerateQuestion;
