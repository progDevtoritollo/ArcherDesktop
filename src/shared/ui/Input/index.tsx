import React, { useState } from 'react';

import './index.scss';

interface InputComponentProps {
	placeholder?: string;
	label?: string;
}

const Input = ({ placeholder, label }: InputComponentProps) => {
	const [value, setValue] = useState<string | undefined>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<label>{label}</label>
			<input
				type='text'
				value={value}
				placeholder={placeholder}
				onChange={handleChange}></input>
		</div>
	);
};

export default Input;
