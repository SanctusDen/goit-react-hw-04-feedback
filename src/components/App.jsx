import React, { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistacs/Statistics';

export const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setOptions(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countPositiveFeedback = (good, totalFeedback) => {
    return Math.round((good / totalFeedback) * 100);
  };

  const optionsData = Object.keys(options);

  const totalFeedback = () => {
    return optionsData.reduce((acc, e) => {
      return options[e] + acc;
    }, 0);
  };

  const total = totalFeedback();
  const positive = countPositiveFeedback(options.good, total);
  return (
    <>
      <Section title="Please leave your feedback here">
        <FeedbackOptions
          options={optionsData}
          handleFeedback={handleFeedback}
        />
        {total > 0 ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={total}
            positive={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
