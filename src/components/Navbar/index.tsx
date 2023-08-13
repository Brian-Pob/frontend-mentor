import type { Location } from "@solidjs/router";
import { A, AnchorProps, useLocation, useNavigate } from "@solidjs/router";
import s from "./Navbar.module.css";

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

  const backPath = () => (location.state?.previous ? -1 : ("/" as any));
  // Credit for solution:
  // https://bobbyhadz.com/blog/typescript-no-overload-matches-this-call
  return (
    <button onClick={() => navigate(-1)} class={s["back-button"]}>
      {text}
    </button>
  );
}

// import { Link, BackButton } from '../Router';
const Navbar = () => {
  return (
    <nav class={s.header}>
      <BackButton text="Back" />
      <h2>Work In Progress! 🛠️</h2>
    </nav>
  );
};

export default Navbar;
