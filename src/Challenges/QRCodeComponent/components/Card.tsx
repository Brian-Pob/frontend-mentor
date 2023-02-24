import { ParentComponent } from 'solid-js';
import styles from './Card.module.css';
const Card: ParentComponent<{
  header: string;
  body: string;
  img_url: string;
}> = (props) => {
  return (
    <div class={styles.cardContainer}>
      <div class={styles.cardContent}>
        <img
          class={styles.cardImage}
          src={props.img_url}
          alt="QR Code for Frontend Mentor"
          srcset=""
        />
        <div class={styles.cardBody}>
          <h2>{props.header}</h2>
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
