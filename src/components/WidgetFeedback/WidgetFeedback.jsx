import React from 'react';
import styles from './WidgetFeedback.module.css';

const WidgetFeedback = ({ feedback, totalFeedback }) => {
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      {totalFeedback > 0 ? (
        <div className={styles.feedbackContainer}>
          <p className={styles.feedbackItem}>
            Good: <span>{feedback.good}</span>
          </p>

          <p className={styles.feedbackItem}>
            Neutral: <span>{feedback.neutral}</span>
          </p>

          <p className={styles.feedbackItem}>
            Bad: <span>{feedback.bad}</span>
          </p>

          <p className={styles.feedbackTotal}>Total: {totalFeedback}</p>
          <p className={styles.feedbackPositive}>Positive: {positiveFeedback}%</p>
        </div>
      ) : (
        <p className={styles.noFeedback}>No feedback given yet.</p>
      )}
    </>
  );
};

export default WidgetFeedback;
