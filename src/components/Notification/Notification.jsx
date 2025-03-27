import s from './Notification.module.css';

export default function WidgetNotification({ message }) {
  return <p className={s.message}>{message}</p>;
}
