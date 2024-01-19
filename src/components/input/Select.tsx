import './Select.css';

export type SelectOption = {
	displayText: string;
	value: string;
}
export type SelectOptions = Array<SelectOption>

interface SelectProps {
	id: string;
	formName: string;
	displayText?: string;
	placeholderText?: string;
	options: SelectOptions;
}

const Select = ({
									id,
									formName,
									displayText,
									placeholderText,
									options
								}: SelectProps) => {
	return <label className="pv-select" htmlFor={id}>
		{displayText}
		<select id={id} name={formName}>
			{placeholderText && <option value="">{placeholderText}</option>}
			{options.map(({ displayText, value }) =>
				<option key={`${formName}-${value}`}
								value={value}>{displayText}</option>)
			}
		</select>
	</label>;
};

export default Select;