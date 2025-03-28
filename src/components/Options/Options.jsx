import { useState } from 'react';
import s from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, onReset }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = option => {
    updateFeedback(option);
    setActiveButton(option);
    setTimeout(() => setActiveButton(null), 300);
  };

  return (
    <div className={s.optionsContainer}>
      <button onClick={() => handleClick('good')} className={`${s.button} ${s.good} ${activeButton === 'good' ? s.active : ''}`}>
        Good
      </button>
      <button onClick={() => handleClick('neutral')} className={`${s.button} ${s.neutral} ${activeButton === 'neutral' ? s.active : ''}`}>
        Neutral
      </button>
      <button onClick={() => handleClick('bad')} className={`${s.button} ${s.bad} ${activeButton === 'bad' ? s.active : ''}`}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button onClick={onReset} className={s.reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
