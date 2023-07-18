import s from './ChallengeCard.module.scss';
import { A } from '@solidjs/router';
import { Challenge as ChallengeDetails } from '../../../types';
import { For, Show } from 'solid-js';

const ChallengeCard = (props: ChallengeDetails) => {
  return (
    <div class={s['challenge-card']}>
      <div class={s['card-content']}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div class={s['challenge-card__tags']}>
          <For each={props.tags}>
            {(tag, index) => (
              <Show when={index() < props.tags.length - 1} fallback={<span>{tag}</span>}>
                <span>{tag}, </span>
              </Show>
            )}
          </For>
        </div>
        <div>
          <A href={props.path}>View Challenge</A>
        </div>
        <div class={s['challenge-card__links']}>
          <A href={props.repoUrl} target="_blank" rel="noopener noreferrer">
            View on Github
          </A>
          <A href={props.fmUrl} target="_blank" rel="noopener noreferrer">
            View on Frontend Mentor
          </A>
        </div>
      </div>
      <img src="https://picsum.photos/300" alt="Placeholder image" />
    </div>
  );
};

export default ChallengeCard;
