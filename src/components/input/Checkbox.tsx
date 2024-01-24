import './Checkbox.css';
import {ReactEventHandler} from 'react';

interface CheckboxProps {
  id: string;
  name: string;
  displayText: string;
  onChange?: ReactEventHandler<HTMLInputElement>;
  isChecked?: boolean;
}

const Checkbox = ({
  id,
  name,
  displayText,
  onChange,
  isChecked = false,
}: CheckboxProps) => {
  const checkedProp = isChecked && {checked: isChecked} || {};

  return <label className="pv-checkbox" htmlFor={id}>
    <input id={id}
           name={name}
           type="checkbox"
           onChange={onChange}
           {...checkedProp} />
    {displayText}
  </label>;
};

export default Checkbox;