import { Input, FormItemProps, InputProps, Form } from 'antd';
import './index.sass';

interface IFormField {
	name: string;
	WrapperProps?: Omit<FormItemProps, 'children'>;
	InputProps?: InputProps;
}

const FormField = ({ InputProps, WrapperProps, name }: IFormField) => {
	return (
		<Form.Item
			label={name}
			layout="vertical"
			name={name.toLowerCase()}
			className={'form__field'}
			{...WrapperProps}
		>
			<Input type="number" required {...InputProps} />
		</Form.Item>
	);
};

export default FormField;
