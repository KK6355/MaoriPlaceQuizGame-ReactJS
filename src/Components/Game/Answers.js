const Answers = (props) => {
  const generateKey = Math.random() * 10000; //not ideal key, could be repested
  const answersOption = props.answers.map((item) => (
    <option value={item} key={generateKey}>
      {item}
    </option>
  ));
  return (
    <div>
      <form>
        <label>The English Name of this place is:</label>
        <select>{answersOption}</select>
      </form>
    </div>
  );
};

export default Answers;
