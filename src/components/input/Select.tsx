import {ReactEventHandler} from 'react';
import './Select.css';

export type SelectOption = {
  displayText: string;
  value: string;
}
export type SelectOptions = Array<SelectOption>

interface SelectProps {
  id: string;
  name: string;
  displayText?: string;
  placeholderText?: string;
  onChange?: ReactEventHandler<HTMLSelectElement>;
  options: SelectOptions;
}

const Select = ({
  id,
  name,
  displayText,
  placeholderText,
  onChange,
  options,
}: SelectProps) => {
  const selectId = `pv-select-${id}`;

  return <label className="pv-select" htmlFor={selectId}>
    {displayText}
    <select id={selectId} name={name} onChange={onChange}>
      {placeholderText && <option value="">{placeholderText}</option>}
      {options.map(({displayText, value}) =>
          <option key={`${selectId}-${value}`}
                  value={value}>
            {displayText}
          </option>,
      )}
    </select>
  </label>;
};

export default Select;