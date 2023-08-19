import './index.scss';

interface TestimonialProps {
  name: string;
  title: string;
  headerText: string;
  bodyText: string;
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <article class="testimonial">
      <div class="info">
        <img src="https://picsum.photos/50/50.webp" alt="profile picture" />
        <div class="name">
          <h3>{props.name}</h3>
          <p>{props.title}</p>
        </div>
      </div>
      <p>{props.headerText}</p>
      <p>{props.bodyText}</p>
    </article>
  );
};

const testimonialData: TestimonialProps[] = [
  {
    name: 'Daniel Clifford',
    title: 'Verified Graduate',
    headerText: `I received a job offer mid-course, and the subjects I learned were current, if not more so, 
      in the company I joined. I honestly feel I got every penny's worth.`,
    bodyText: ` I was an EMT for many years before I joined the bootcamp. 
      I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course 
      and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. 
      Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup. `,
  },
  {
    name: 'Jonathan Walters',
    title: 'Verified Graduate',
    headerText: `The team was very supportive and kept me motivated`,
    bodyText: ` I started as a total newbie with virtually no coding skills.
      I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. `,
  },
  {
    name: 'Jeanette Harmon',
    title: 'Verified Graduate',
    headerText: `The team was very supportive and kept me motivated`,
    bodyText: ` I started as a total newbie with virtually no coding skills.
      I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. `,
  },
  {
    name: 'Patrick Abrams',
    title: 'Verified Graduate',
    headerText: `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.`,
    bodyText: ` The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary
      to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the
      personal attention you need from an incredible community of smart and amazing people. `,
  },
  {
    name: 'Kira Whittle',
    title: 'Verified Graduate',
    headerText: `Such a life-changing experience. Highly recommended!`,
    bodyText: ` Before joining the bootcamp, I've never written a line of code.
      I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former
      student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were  
      very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning
      to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of
      my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! `,
  },
];

export default function TestimonialsGrid() {
  return (
    <main class="testimonials-grid">
      <div class="testimonials">
        {testimonialData.map((testimonial) => (
          <Testimonial {...testimonial} />
        ))}
      </div>
    </main>
  );
}
