import React from 'react';
import s from './WidgetDescription.module.css';

const WidgetDescription = () => {
  return (
    <div className={s.container}>
      <h1 className={s.name}>Sip Happens Café</h1>
      <p className={s.description}>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  );
};

export default WidgetDescription;
