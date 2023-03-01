import { ParentComponent, Show } from "solid-js";
import styles from "./Card.module.css";

const Card: ParentComponent<{
  header: string;
  body: string;
  img_url?: string;
  isChild?: boolean;
}> = (props) => {
  return (
    <div class={styles.cardContainer}>
      <Show when={props.img_url}>
        <img
          class={styles.cardImage}
          src={props.img_url}
          alt="Illustration of a person listening to music."
        />
      </Show>

      <div class={styles.cardContent}>
        <div class={styles.cardBody}>
          <Show when={props.isChild} fallback={<h1>{props.header}</h1>}>
            <h2>{props.header}</h2>
          </Show>

          <p>{props.body}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
