import { FeatureItem } from "./FeatureItem"

export const Features = () => {
  return (
    <div className="features__content">
      <div className="features__content-header">
        <h1>Features</h1>
        <p>Phasellus sagittis consectetur purus quis accumsan.</p>
        <p className="bold">
          Nullam et luctus purus praesent sollicitudin massa sed adipiscing
          bibendum.
        </p>
      </div>
      <div className="features__item-row">
        <div className="features__column1">
          <FeatureItem />  
          <FeatureItem />  
          <FeatureItem />  
          <FeatureItem />  
        </div>
        <div className="features__column2">
          <FeatureItem />
        </div>
      </div>
    </div>
  );
};
