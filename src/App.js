import "./App.css";
import "./Radioform";
import Radioform from "./Radioform";
import { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Button } from "@material-ui/core";

function App() {
  const [answer, setanswer] = useState({});
  const [steps, setsteps] = useState(0);
  const [err, seterr] = useState("");
  const [text, settext] = useState("");
  const [userans, setuserans] = useState([]);

  const answers = ["Delivery", "Swiggy", "Mrinda", "Fanta"];

  const onAnswerselect = (ans) => {
    console.log(ans);

    const ansidx = answers.findIndex((item) => item === ans);

    if (ansidx >= 0) {
      setanswer({ ...answer, [ans]: ans });
      setsteps(steps + 1);
    } else {
      seterr("Thanks for survey");
    }
  };

  const onTextchange = (e) => {
    settext(e.target.value);
  };

  const onFinalsubmit = () => {
    const selectedanswers = [];
    for (let key in answer) {
      selectedanswers.push(key);
    }
    setuserans(selectedanswers);
    setsteps(steps + 1);
  };

  return (
    <div className="app">
      {err ? (
        <h1>{err}</h1>
      ) : (
        <div>
          {steps === 0 ? (
            <Radioform
              ques={"Where do you eat often "}
              name={"eat"}
              values={["Home", "Dinein", "Delivery"]}
              selectedanswer={onAnswerselect}
            />
          ) : null}

          {steps === 1 ? (
            <Radioform
              ques={"How do you order online "}
              name={"order"}
              selectedanswer={onAnswerselect}
              values={["Zomato ", "Swiggy"]}
            />
          ) : null}

          {steps === 2 ? (
            <Radioform
              ques={"Which drink do you often order with your food: "}
              name={"drinks"}
              values={["Thumbs Up ", "Coca-cola", "Mrinda", "Fanta"]}
              selectedanswer={onAnswerselect}
            />
          ) : null}

          {steps === 3 ? (
            <div>
              <TextareaAutosize
                style={{ width: "500px" }}
                aria-label="minimum height"
                rowsMin={10}
                value={text}
                placeholder="What do you like about the drink you selected in the previous question?"
                onChange={onTextchange}
              />
              <Button onClick={onFinalsubmit}> Submit </Button>
            </div>
          ) : null}

          {steps === 4 ? (
            <div>
              <h1>Your Are selected </h1>
              <h2>Your answers</h2>
              <div style={{ display: "flex" , justifyContent :'space-evenly'}}>
                {userans.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
              <p>{text}</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
