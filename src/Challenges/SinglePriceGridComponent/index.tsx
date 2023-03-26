import s from "./index.module.css";

const SinglePriceGrid = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <main class={s.SinglePriceGridComponent}>
      <div class={s.container}>
        <div class={s.header}>
          <h1 class={s.title}>Join our community</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>
            Gain access to our full library of tutorials along with expert code reviews. Perfect for
            any developers who are serious about honing their skills.
          </p>
        </div>
        <div class={s.action}>
          <h3>Monthly Subscription</h3>
          <div>
            <h2 class={s.price}>$29</h2> <span>per month</span>
            <p>Full access for less than $1 a day</p>
          </div>
          <button class={s.signupBtn} onClick={handleClick}>Sign Up</button>
        </div>
        <div class={s.info}>
          <h3>Why Us</h3>
          <ul role="list">
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SinglePriceGrid;
