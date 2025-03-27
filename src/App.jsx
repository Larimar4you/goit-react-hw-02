import { useState, useEffect } from 'react';

import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';

function App() {
  const getInitialState = () => {
    const saveFeedback = localStorage.getItem('feedback');
    return saveFeedback
      ? JSON.parse(saveFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  };

  const [feedback, setFeedback] = useState(getInitialState);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  return (
    <>
      <Description />
      <Options setFeedback={setFeedback} totalFeedback={totalFeedback} onReset={() => setFeedback({ good: 0, neutral: 0, bad: 0 })} />

      {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
    </>
  );
}

export default App;
