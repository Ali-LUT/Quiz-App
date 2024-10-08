import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";

function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  });

  return (
    <div className="App">
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;
