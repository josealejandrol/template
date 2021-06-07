import icon from '../assets/icons/icon_document.png'

export const FeatureItem = () => {
  return (
    <div className="features__item-card">
      <h1 className="features__item-title">VESTIBULUM ACT</h1>
      <div className="features__item-row">
        <img src={icon} alt="icon" className="features__item-icon" />
        <p className="features__item-text">
          Donec eget ultricies sapi. Sed porttitor, mauris ater lob facilisis,
          elit sapie eleifend ligula, et facilisis dolor odom vitae nunc.
          Phasellus ultricies eliteg.
        </p>
      </div>
    </div>
  );
};
