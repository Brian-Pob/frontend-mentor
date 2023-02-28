import type { Location } from '@solidjs/router';
import { A, AnchorProps, useLocation, useNavigate } from '@solidjs/router';

export function Link(props: AnchorProps) {
  const location = useLocation();
  return <A state={{ previous: location.pathname }} {...props} />;
}

class LocationState extends Location {
  previous?: string;
}

// Path: src/components/Header/index.tsx

// import { Link, BackButton } from '../Router';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <header class={styles.header}>
      <h2>Work In Progress! 🛠️</h2>
    </header>
  );
};

export default Navbar;
