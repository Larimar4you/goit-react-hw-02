// import React from 'react';
import s from './WidgetFeedback.module.css';

const WidgetFeedback = ({ feedback, totalFeedback }) => {
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={s.feedbackContainer}>
      <ul className={s.list}>
        <li className={s.feedbackItem}>
          Good: <span>{feedback.good}</span>
        </li>

        <li className={s.feedbackItem}>
          Neutral: <span>{feedback.neutral}</span>
        </li>

        <li className={s.feedbackItem}>
          Bad: <span>{feedback.bad}</span>
        </li>

        <li className={s.feedbackTotal}>Total: {totalFeedback}</li>
        <li className={s.feedbackPositive}>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default WidgetFeedback;
