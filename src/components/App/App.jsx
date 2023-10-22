import {useState } from 'react';
import { Container } from './App.styled';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  function onLeaveFeedback(option) {
    switch (option) {
      case 'good':
        return setGood(good + 1);
      case 'neutral':
        return setNeutral(neutral + 1);
      case 'bad':
        return setBad(bad + 1);
      default:
        throw new Error('There is no such option!');
    }
  }

  const totalFeedback = good + neutral + bad;
  const totalPercentage = Math.round((good / totalFeedback) * 100);
 
  return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
  );
};
