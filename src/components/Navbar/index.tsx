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
export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation<LocationState>();

  const backPath = () => (location.state?.previous ? -1 : ('/' as any));
  // Credit for solution:
  // https://bobbyhadz.com/blog/typescript-no-overload-matches-this-call
  return (
    <button onClick={() => navigate(backPath())} class={styles['back-button']}>
      Back
    </button>
  );
}

// Path: src/components/Header/index.tsx

// import { Link, BackButton } from '../Router';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <header class={styles.header}>
      <BackButton />
      <h2>Work In Progress! 🛠️</h2>
    </header>
  );
};

export default Navbar;
