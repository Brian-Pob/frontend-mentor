import styles from './Button.module.scss';
import { ParentComponent } from 'solid-js';

const Button: ParentComponent<{ text: string; btnType?: string }> = (props) => {
  if (!props.btnType) {
    props.btnType = 'primary';
  }
  return <button class={styles[props.btnType]}>{props.text}</button>;
};

export default Button;
