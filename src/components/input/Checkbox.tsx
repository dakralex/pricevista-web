import './Checkbox.css';

interface CheckboxProps {
	id: string;
	displayText: string;
	isChecked?: boolean;
}

const Checkbox = ({
										id,
										displayText,
										isChecked = false
									}: CheckboxProps) => {
	const checkedProp = isChecked && { checked: isChecked } || {};

	return <label className="pv-checkbox" htmlFor={id}>
		<input id={id} type="checkbox" {...checkedProp} />
		{displayText}
	</label>;
};

export default Checkbox;