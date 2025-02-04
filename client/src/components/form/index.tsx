import { Form, Flex, Button } from 'antd';
import FormField from './field';
import './index.sass';
import { useForm } from 'antd/es/form/Form';
import { memo, useState } from 'react';
import { store } from 'store/store';
import { observer } from 'mobx-react-lite';

export interface ICalculate {
	width: number;
	height: number;
	length: number;
}
const BoxForm = memo(
	observer(() => {
		const [form] = useForm();
		const [loading, setLoading] = useState(false);
		const onSubmit = async (values: ICalculate) => {
			setLoading(true);
			await store.setVertices(values);
			setLoading(false);
		};
		return (
			<Form className="form" form={form} onFinish={onSubmit}>
				<Flex vertical gap={32} className="form__box">
					<Flex vertical gap={16}>
						<FormField name="Height" />
						<FormField name="Width" />
						<FormField name="Length" />
					</Flex>
					<Form.Item noStyle>
						<Button type="primary" htmlType="submit" loading={loading} block>
							Calculate
						</Button>
					</Form.Item>
				</Flex>
			</Form>
		);
	}),
);

export default BoxForm;
