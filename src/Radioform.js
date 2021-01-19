import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useState } from "react";
import { Button } from "@material-ui/core";


function Radioform(props) {
  const [selvalue, setselvalue] = useState("");

  const onButtonselect = (e) => {
    setselvalue(e.target.value);
  };

  const onNext = () => {
    props.selectedanswer(selvalue);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">{props.ques}</FormLabel>
        <RadioGroup value={selvalue} onChange={onButtonselect}>
          {props.values.map((item) => {
            return (
              <FormControlLabel key={Math.random()} value={item} control={<Radio />} label={item} />
            );
          })}
        </RadioGroup>
        <Button onClick={onNext}>NEXT</Button>
      </FormControl>
    </div>
  );
}

export default Radioform;
