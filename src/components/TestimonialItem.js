import icon from "../assets/icons/testimonial_thumb.png";

export const TestimonialItem = () => {
  return (
    <div className="testimonial__item-container">
      <div className="testimonial__item-box">
        <p>
          Curabitur vehicula mi in quam molestie a eleifend magna phare. Mauris
          mattis faucibus porttitor mauris molestie orci neque.
        </p>
      </div>
      <div className="testimonial__item-row">
        <img src={icon} alt="icon1" />
        <p>Superb!</p>
        <p>John Doe,</p>
        <p>Founder World Company</p>
      </div>
      <div className="triangulo_top_left"></div>
    </div>
  );
};
