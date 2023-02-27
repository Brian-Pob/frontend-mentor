import { ParentComponent } from 'solid-js';
import styles from './PlanSelection.module.css';

const PlanSelection: ParentComponent<{
  planTitle: string;
  planPrice: string;
  planPeriod: string;
  img_url: string;
}> = (props) => {
  return (
    <div class={styles.PlanSelection}>
      <div class={styles.image}>
        <img src={props.img_url} alt="plan selection" />
      </div>
      <div class={styles.info}>
        <h3>{props.planTitle}</h3>
        <p>
          {props.planPrice}/{props.planPeriod}
        </p>
      </div>
      <div>
        <a href="#">Change</a>
      </div>
    </div>
  );
};

export default PlanSelection;
