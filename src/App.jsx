import { useState, useEffect } from 'react';

import './App.css';
import WidgetDescription from './components/WidgetDescription/WidgetDescription';
import WidgetFeedback from './components/WidgetFeedback/WidgetFeedback';
import WidgetNotification from './components/WidgetNotification/WidgetNotification';
import WidgetOptions from './components/WidgetOptions/WidgetOptions';

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
      <WidgetDescription />
      <WidgetOptions setFeedback={setFeedback} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? <WidgetFeedback feedback={feedback} totalFeedback={totalFeedback} /> : <WidgetNotification />}
    </>
  );
}

export default App;
