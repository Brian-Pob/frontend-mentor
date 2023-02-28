import type { Location } from '@solidjs/router';
import { A, AnchorProps, useLocation, useNavigate } from '@solidjs/router';

export function Link(props: AnchorProps) {
  const location = useLocation();
  return <A state={{ previous: location.pathname }} {...props} />;
}

class LocationState extends Location {
  previous?: string;
}

// Credit for Navigate Back solution:
// https://github.com/solidjs/solid-router/discussions/231
export function BackButton({ text }: { text?: string }) {
  const navigate = useNavigate();
  const location = useLocation<LocationState>();

  const backPath = () => (location.state?.previous ? -1 : ('/' as any));
  // Credit for solution:
  // https://bobbyhadz.com/blog/typescript-no-overload-matches-this-call
  return (
    <button onClick={() => navigate(backPath())} class={s['back-button']}>
      {text}
    </button>
  );
}

// Path: src/components/Header/index.tsx

import s from './Footer.module.css';
const Footer = () => {
  return (
    <footer class={s.footer}>
      <button class={s['nav-btn']}>&lt;</button>
      <BackButton text="Home" />
      <button class={s['nav-btn']}>&gt;</button>
    </footer>
  );
};

export default Footer;
