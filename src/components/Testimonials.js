import { TestimonialItem } from "./TestimonialItem"

export const Testimonials = () => {
  return (
    <div className="testimonials__content">
      <div className="testimonials__content-box">
        <div className="testimonials__content-top">
          <h1>Testimonials</h1>
          <p>Quisque sodales metus et mauris imperdiet non volutpat.</p>
          <p className="bold">
            Nulla turpis velit, imperdiet vel viverra ut, tristique sit amet
            felis.
          </p>
        </div>
        <div className="testimonials__content-row">
          <div className="testimonials__content-row-column1">
            <TestimonialItem />
            <TestimonialItem />
          </div>
          <div className="testimonials__content-row-column2">
            <TestimonialItem />
            <TestimonialItem />
          </div>
        </div>
      </div>
    </div>
  );
};
