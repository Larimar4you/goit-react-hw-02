import React from 'react';
import s from './WidgetDescription.module.css';

const WidgetDescription = () => {
  return (
    <li className={s.container}>
      <h1 className={s.name}>Sip Happens Café</h1>
      <p className={s.description}>Please leave your feedback about our service by selecting one of the options below.</p>
    </li>
  );
};

export default WidgetDescription;
