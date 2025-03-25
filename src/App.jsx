import { useState } from 'react';
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

  return (
    <>
      <WidgetDescription />
      <WidgetOptions setFeedback={setFeedback} />

      {Object.values(feedback).some(value => value > 0) ? <WidgetFeedback feedback={feedback} /> : <WidgetNotification />}
    </>
  );
}

export default App;
