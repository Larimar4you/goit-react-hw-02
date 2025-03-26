import React from 'react';
import s from './WidgetFeedback.module.css';

const WidgetFeedback = ({ feedback, totalFeedback }) => {
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      {totalFeedback > 0 ? (
        <div className={s.feedbackContainer}>
          <p className={s.feedbackItem}>
            Good: <span>{feedback.good}</span>
          </p>

          <p className={s.feedbackItem}>
            Neutral: <span>{feedback.neutral}</span>
          </p>

          <p className={s.feedbackItem}>
            Bad: <span>{feedback.bad}</span>
          </p>

          <p className={s.feedbackTotal}>Total: {totalFeedback}</p>
          <p className={s.feedbackPositive}>Positive: {positiveFeedback}%</p>
        </div>
      ) : (
        <p className={s.noFeedback}>No feedback given yet.</p>
      )}
    </>
  );
};

const Options = ({ options, onSelect }) => {
  return (
    <div className={s.optionsContainer}>
      {options.map((option, index) => (
        <button key={index} onClick={() => onSelect(option)} className={s.optionButton}>
          {option}
        </button>
      ))}
    </div>
  );
};

const App = () => {
  const [feedback, setFeedback] = React.useState({ good: 0, neutral: 0, bad: 0 });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const handleSelect = option => {
    setFeedback(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  return (
    <div className={s.appContainer}>
      <Options options={['good', 'neutral', 'bad']} onSelect={handleSelect} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </div>
  );
};

export default WidgetFeedback;
