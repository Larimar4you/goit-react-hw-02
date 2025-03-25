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
      <button className={`${s.button} ${s.good}`} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={`${s.button} ${s.neutral}`} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={`${s.button} ${s.bad}`} onClick={() => updateFeedback('bad')}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={`${s.button} ${s.reset}`} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default WidgetOptions;
