import React from 'react';
import s from './WidgetOptions.module.css';

const WidgetOptions = ({ setFeedback, totalFeedback }) => {
  const updateFeedback = feedbackType => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={s.container}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>

      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default WidgetOptions;
