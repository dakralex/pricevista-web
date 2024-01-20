import {Col, InputGroup, InputNumber, RangeSlider, Row} from 'rsuite';
import {useState} from 'react';
// import './styles.css';
// import 'rsuite/Slider/styles/index.less';
import './PriceSlider.css';

// const PriceSlider = () => (
//   <div>
//     <p>Preis</p>
//     <RangeSlider defaultValue={[10, 50]} />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

function Example2() {
  const [value, setValue] = useState<[number, number]>([10, 50]);
  return (
      <Row>
        <Col md={10}>
          <RangeSlider
              progress
              style={{marginTop: 16}}
              value={value}
              min={value[0]}
              max={value[1]}
              onChange={(value) => {
                setValue(value);
              }}
          />
        </Col>
        <Col md={8}>
          <InputGroup>
            <InputNumber
                min={0}
                max={100}
                value={value[0]}
            />
            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber
                min={0}
                max={100}
                value={value[1]}
            />
          </InputGroup>
        </Col>
      </Row>
  );
}

const PriceSlider = () => (
    <div className="pv-priceslider">
      <Example2 />
    </div>
);

export default PriceSlider;
