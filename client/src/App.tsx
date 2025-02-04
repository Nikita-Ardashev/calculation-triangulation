import './App.sass';
import { ConfigProvider, Flex, Switch, Typography } from 'antd';
import BoxForm from './components/form';
import Scene from './components/scene';
import { memo, useState } from 'react';
import { store } from 'store/store';
import { observer } from 'mobx-react-lite';

const App = memo(
	observer(() => {
		const isDarkTheme = store.getTheme === 'dark';
		return (
			<ConfigProvider
				theme={{
					token: {
						borderRadius: 8,
						colorText: isDarkTheme ? '#fff' : '#000',
						colorBgContainer: isDarkTheme ? '#333' : '#fff',
						colorBorder: isDarkTheme ? '#fff' : '#333',
					},
				}}
			>
				<Flex
					className="wrapper"
					justify="center"
					align="center"
					style={{
						background: isDarkTheme ? '#333' : '#fff',
					}}
				>
					<Flex vertical gap={32} align="stretch" className="control">
						<Flex gap={12}>
							<Typography.Text>Change theme</Typography.Text>
							<Switch
								className="control__theme"
								onChange={(checked) =>
									store.setTheme(checked ? 'dark' : 'light')
								}
								title="Change theme"
							/>
						</Flex>
						<BoxForm />
					</Flex>
					<Scene className="scene" />
				</Flex>
			</ConfigProvider>
		);
	}),
);

export default App;
