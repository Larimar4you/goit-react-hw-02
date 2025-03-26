import s from './WidgetNotification.module.css';

export default function WidgetNotification({ message }) {
  return <p className={s.message}>{message}</p>;
}
