import './RadioSelect.css';

export type RadioSelectOption = {
  displayText: string;
  value: string;
}
export type RadioSelectOptions = Array<RadioSelectOption>;

interface RadioSelectProps {
  id: string;
  name: string;
  displayText?: string;
  options: RadioSelectOptions;
}

export const RadioSelect = ({
  id,
  name,
  displayText,
  options,
}: RadioSelectProps) => {
  const radioSelectId = `pv-radio-select-${id}`;

  return <div className="pv-radio-select">
    {displayText && <strong>{displayText}</strong>}
    <div className="pv-radio-select-options">
      {options.map(({displayText, value}, index) => {
        const key = `radio-select-${name}-${value}`;
        const radioOptionId = `${radioSelectId}-${index}`;

        return <label key={key}
                      className="pv-radio"
                      htmlFor={radioOptionId}>
          <input id={radioOptionId}
                 type="radio"
                 name={name}
                 value={value} />
          {displayText}
        </label>;
      })}
    </div>
  </div>;
};