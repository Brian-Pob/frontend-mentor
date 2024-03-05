import { A, AnchorProps, useLocation, useNavigate } from '@solidjs/router';
import s from './Navbar.module.css';

export function Link(props: AnchorProps) {
  const location = useLocation();
  return <A state={{ previous: location.pathname }} {...props} />;
}

// Credit for Navigate Back solution:
// https://github.com/solidjs/solid-router/discussions/231
export function BackButton({ text }: { text?: string }) {
  const navigate = useNavigate();

  // Credit for solution:
  // https://bobbyhadz.com/blog/typescript-no-overload-matches-this-call
  return (
    <button onClick={() => navigate(-1)} class={s['back-button']}>
      {text}
    </button>
  );
}

// import { Link, BackButton } from '../Router';
const Navbar = () => {
  return (
    <nav class={s.header}>
      <BackButton text="Back" />
      {/* <div class={s.links}>
        <Link href="/" class={s['header-link']}>
          Home
        </Link>
        <Link href="/challenges" class={s['header-link']}>
          Completed Challenges
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
