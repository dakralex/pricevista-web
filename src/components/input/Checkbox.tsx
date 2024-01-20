import './Checkbox.css';

interface CheckboxProps {
  id: string;
  name: string;
  displayText: string;
  isChecked?: boolean;
}

const Checkbox = ({
  id,
  name,
  displayText,
  isChecked = false,
}: CheckboxProps) => {
  const checkedProp = isChecked && {checked: isChecked} || {};

  return <label className="pv-checkbox" htmlFor={id}>
    <input id={id} name={name} type="checkbox" {...checkedProp} />
    {displayText}
  </label>;
};

export default Checkbox;