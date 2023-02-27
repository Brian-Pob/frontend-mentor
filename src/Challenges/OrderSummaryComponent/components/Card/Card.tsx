import { ParentComponent, Show } from 'solid-js';
import styles from './Card.module.css';

const Card: ParentComponent<{
  header: string;
  body: string;
  img_url?: string;
}> = (props) => {
  return (
    <div class={styles.cardContainer}>
      <Show when={props.img_url}>
        <img
          class={styles.cardImage}
          src={props.img_url}
          alt="Illustration of a person listening to music."
          srcset=""
        />
      </Show>

      <div class={styles.cardContent}>
        <div class={styles.cardBody}>
          <h2>{props.header}</h2>
          <p>{props.body}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
