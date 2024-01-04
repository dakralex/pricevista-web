import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from 'rsuite';
import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles.css';
import 'rsuite/Slider/styles/index.less';
import './PriceSlider.css';


// const PriceSlider = () => (
//   <div>
//     <p>Preis</p>
//     <RangeSlider defaultValue={[10, 50]} /> 
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

function Example2() {
  const [value, setValue] = React.useState([10, 50]);
  return (
    <Row>
      <Col md={10}>
        <RangeSlider
          progress
          style={{ marginTop: 16 }}
          value={value}
          onChange={value => {
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
            onChange={nextValue => {
              const [start, end] = value;
              if (nextValue > end) {
                return;
              }
              setValue([nextValue, end]);
            }}
          />
          <InputGroup.Addon>to</InputGroup.Addon>
          <InputNumber
            min={0}
            max={100}
            value={value[1]}
            onChange={nextValue => {
              const [start, end] = value;
              if (start > nextValue) {
                return;
              }
              setValue([start, nextValue]);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  );
}

const PriceSlider = () => (
  <>
    
    <Example2 />
   
  </>
);

export default PriceSlider;