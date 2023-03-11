import React from 'react';
import { Link } from 'react-router-dom';

import {
	GlobalOutlined,
	MacCommandOutlined,
	ContainerOutlined,
	FlagOutlined,
	SettingOutlined,
	UserOutlined,
	BookOutlined,
	LineChartOutlined,
	UserAddOutlined,
	BellOutlined,
	ApartmentOutlined,
	FireOutlined,
} from '@ant-design/icons';
import { Menu as UIMenu } from 'antd';
import type { MenuProps } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key?: React.Key | null, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('User', 'User', <UserOutlined />, [
		getItem(<Link to='user/notifications'> Notifications</Link>, 'User-Notifications', <BellOutlined />),
		getItem(<Link to='user/activity'> Activity</Link>, 'User-Activity', <BookOutlined />),
		getItem(<Link to='user/friends'> Friends</Link>, 'User-Friends', <UserAddOutlined />),
		getItem(<Link to='user/statistic'> Statistic</Link>, 'User-Statistic', <LineChartOutlined />),
		getItem(<Link to='user/settings'> Settings</Link>, 'User-Settings', <SettingOutlined />),
	]),

	getItem('Club', 'Club', <UserOutlined />, [
		getItem(<Link to='club/statistic'>Statistic</Link>, 'Club-Statistic', <LineChartOutlined />),
		getItem(<Link to='club/activity'>Activity</Link>, 'Club-Activity', <BookOutlined />),
		getItem(<Link to='club/events'>Events</Link>, 'Club-Events', <MacCommandOutlined />),
		getItem(<Link to='club/settings'>Settings</Link>, 'Club-Settings', <SettingOutlined />),
	]),

	getItem('Create', 'Create', <FireOutlined />, [
		getItem(<Link to='create/round'>New Round</Link>, 'Create-New Check', <ContainerOutlined />),
		getItem(<Link to='create/duel'>Duel</Link>, 'Create-Duel', <ApartmentOutlined />),
		getItem(<Link to='create/competition'>Competition</Link>, 'Create-Competition', <FlagOutlined />),
	]),

	// world experience
	getItem('World', 'World', <GlobalOutlined />, [
		getItem(<Link to='world/activity'>Activity</Link>, 'World-Activity', <BookOutlined />),
		getItem(<Link to='world/competition'>Competition</Link>, 'World-Competition', <FlagOutlined />),
	]),
];

const Menu: React.FC = () => {
	return (
		<section>
			<UIMenu
				style={{ width: 200 }}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['Club', 'User', 'Create', 'World']}
				mode={'inline'}
				theme={'light'}
				items={items}
			/>
		</section>
	);
};

export default Menu;
