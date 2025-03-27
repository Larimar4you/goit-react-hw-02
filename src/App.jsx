import { useState, useEffect } from 'react';

import './App.css';
import Description from './components/Test/Test';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Option/Option';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options setFeedback={setFeedback} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} /> : <Notification />}
    </>
  );
}

export default App;
