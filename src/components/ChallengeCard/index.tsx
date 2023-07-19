import s from './ChallengeCard.module.scss';
import { A } from '@solidjs/router';
import { Challenge as ChallengeDetails } from '../../../types';
import { For, Show } from 'solid-js';
import { TbBrandGithub } from 'solid-icons/tb';
import image from '../../assets/order_summary.webp';
import FemIcon from './femIcon';
const ChallengeCard = (props: ChallengeDetails) => {
  return (
    <div class={s['challenge-card']}>
      <div class={s['card-content']}>
        <div class={s['card-info']}>
          <h3 aria-label={props.name}>{props.name}</h3>
          <p>{props.description}</p>
          <div class={s['tags']}>
            <p>
              <For each={props.tags}>
                {(tag, index) => (
                  <Show when={index() < props.tags.length - 1} fallback={tag}>
                    {tag + ', '}
                  </Show>
                )}
              </For>
            </p>
          </div>
        </div>
        <div class={s['links']}>
          <A href={props.path}>View Challenge</A>
          <div class={s['external']}>
            <A href={props.repoUrl} target="_blank" rel="noopener noreferrer">
              <TbBrandGithub />
            </A>
            <A href={props.fmUrl} target="_blank" rel="noopener noreferrer" class={s['fem-logo']}>
              <FemIcon />
            </A>
          </div>
        </div>
      </div>
      <img src={image} alt="Placeholder image" />
    </div>
  );
};

export default ChallengeCard;
