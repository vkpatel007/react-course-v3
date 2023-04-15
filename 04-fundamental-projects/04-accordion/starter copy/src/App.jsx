import { useState } from "react";
import data from "./data";
import Question from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data)


  return (<main>
    <Question questions={questions} />

  </main>
  )
};
export default App;
