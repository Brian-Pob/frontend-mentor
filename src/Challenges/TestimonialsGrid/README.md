# Testimonials Grid (README Generated with ChatGPT)

The following code defines a testimonials grid using TypeScript and JSX in a Solid.js project. The grid displays multiple testimonial articles, each with a profile picture, a person's name and title, as well as header and body text.

```tsx
import './index.scss';

// Define the structure of testimonial data
interface TestimonialProps {
  name: string;
  title: string;
  headerText: string;
  bodyText: string;
}

// Testimonial component that displays individual testimonials
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

// Define testimonial data
const testimonialData: TestimonialProps[] = [
  // ... Testimonial data objects ...
];

// Component rendering the testimonials grid
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
```

### TestimonialProps Interface

The `TestimonialProps` interface defines the structure of testimonial data, including the person's name, title, header text, and body text for each testimonial.
Styling was done using SCSS with useful variables from Adam Argyle's OpenProps library.

### Testimonial Component

The `Testimonial` component receives testimonial data as props and displays it within an article element. It includes the person's profile picture, name, title, header text, and body text.

### Testimonial Data

The `testimonialData` array holds a collection of testimonial objects. Each object contains details about a person's experience, including their name, title, header text, and body text.

### TestimonialsGrid Component

The `TestimonialsGrid` component renders the testimonials grid. It maps through the `testimonialData` array and renders the `Testimonial` component for each testimonial, creating a grid-like layout.