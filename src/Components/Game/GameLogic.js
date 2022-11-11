import { useState } from "react";
import { quizData } from "../../Assets/data";
import Answers from "./Answers";
import QuestionAndHint from "./QuestionAndHint";
const GenerateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [hint, setHint] = useState("");
  const [answer, setAnswer] = useState("");

  // const [answer, setAnswer] = useState("");
  // sort data
  // const sortedData = [...quizData].sort();
  // const quizNum = sortedData.length;
  // const quizIndex = Math.floor(Math.random() * quizNum);
  // const randomQuiz = sortedData[quizIndex];
  // const answers = sortedData.map((item) => item.Answer);
  const sortedData = [...quizData].sort();
  const quizNum = sortedData.length;
  const answers = sortedData.map((item) => item.Answer);
  let randomQuiz = {
    Question: "Ahuroa",
    Components: "ahu: mound; roa: long",
    Answer: "Long mound",
  };
  const getAQuesionHandler = () => {
    const quizIndex = Math.floor(Math.random() * quizNum);
    randomQuiz = sortedData[quizIndex];

    setQuestion(randomQuiz.Question);
    setHint(randomQuiz.Components);
    setAnswer(randomQuiz.Answer);

    console.log(randomQuiz);
  };

  return (
    <div>
      <button onClick={getAQuesionHandler}>Get A Random Place</button>
      <QuestionAndHint
        question={question}
        hint={hint}
        ongetAQuesion={getAQuesionHandler}
      />
      {question && (
        <Answers answers={answers} answer={answer} question={question} />
      )}
    </div>
  );
};

export default GenerateQuestion;
