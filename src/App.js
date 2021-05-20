import QuestionForm from "./components/questionForm";
import {useState} from "react";
function App() {
    const [text1,setText1]=useState("");

  return (
    <div className="App">
      <QuestionForm />
    </div>
  );
}

export default App;
