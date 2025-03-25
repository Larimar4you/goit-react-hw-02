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

export default WidgetFeedback;
