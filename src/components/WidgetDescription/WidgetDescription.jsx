import { descriptionTitle, descriptionText } from './WidgetDescription.module.css';
const WidgetDescription = () => {
  return (
    <>
      <h1 className={descriptionTitle}>Sip Happens Café</h1>
      <p className={descriptionText}>Please leave your feedback about our service by selecting one of the options below.</p>
    </>
  );
};

export default WidgetDescription;
