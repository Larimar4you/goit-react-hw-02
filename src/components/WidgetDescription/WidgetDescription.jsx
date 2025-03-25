import React from 'react';
import styles from './WidgetDescription.module.css';

const WidgetDescription = () => {
  return (
    <li className={styles.container}>
      <h1 className={styles.name}>Sip Happens Café</h1>
      <p className={styles.description}>Please leave your feedback about our service by selecting one of the options below.</p>
    </li>
  );
};

export default WidgetDescription;
