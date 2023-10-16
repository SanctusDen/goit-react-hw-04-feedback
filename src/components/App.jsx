import React, { useState } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import {Section} from './Section/Section'
import { Notification } from "components/Notification/Notification";
import  {Statistics} from "components/Statistacs/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const [options, setOptions] = useState({Good:0, Neutral:0, Bad:0});
  const [options, setOptions] = useState(setGood, setNeutral, setBad);
  const handleFeedback = e => {
    const value = e.target.value;
    setOptions(prevState => ({
      ...prevState,
      [value]: prevState[value] + 1
    }));
  };

  const countPositiveFeedback = () => {
    return Math.round((setGood / TotalFeedback()) * 100);
  };

  const TotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    const total = setGood + setNeutral + setBad;
    return total;
  };
  
  // const { good, neutral, bad } = this.state;
  // const onFeedbackOptions = Object.keys(setGood,setNeutral,setBad);
  // const countTotal = TotalFeedback();

  return (
    <>
      <Section title="Please leave your feedback here">
        <FeedbackOptions
          options={options}
          handleFeedback={handleFeedback}
        />
        {TotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={TotalFeedback}
            countPositiveFeedback={countPositiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;