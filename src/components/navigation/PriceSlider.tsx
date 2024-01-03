import { Slider, RangeSlider } from 'rsuite';
import './PriceSlider.css';

const PriceSlider = () => (
  <div>
    <Slider
      progress
      defaultValue={50}
      onChange={value => {
        console.log(value);
      }}
    />
    <hr />
    <RangeSlider defaultValue={[10, 50]} />
  </div>
);

export default PriceSlider;