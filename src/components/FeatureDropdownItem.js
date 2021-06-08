import iconPlus from '../assets/icons/icon_plus_white.png';

export const FeatureDropdownItem = () => {
  return (
    <div className="dropdown__container">
      <div className="dropdown__container-title">
        <h2>HOW DOES IT WORK</h2>
      </div>
      <div className="dropdown__container-icon">
        <img src={iconPlus} alt="icon_plus" />
      </div>
    </div>
  )
}