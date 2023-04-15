import { useState } from "react";
import data from "./data";
import Question from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (<main>
    <Question questions={questions} activeId={activeId} toggleQuestion={toggleQuestion} />

  </main>
  )
};
export default App;
