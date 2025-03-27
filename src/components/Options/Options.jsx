import { useState } from 'react';
import s from './Options.module.css';

const Options = ({ setFeedback, totalFeedback }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = option => {
    setFeedback(prev => ({ ...prev, [option]: prev[option] + 1 }));
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
        <button onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })} className={s.reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
