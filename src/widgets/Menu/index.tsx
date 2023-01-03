
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  GlobalOutlined,
  MacCommandOutlined,
  ContainerOutlined,
  LinkOutlined,
  FlagOutlined,
  SettingOutlined,
  UserOutlined,
  BookOutlined, LineChartOutlined,
  UserAddOutlined,
  BellOutlined,
  ApartmentOutlined
} from '@ant-design/icons';
import { Divider, Menu as UIMenu, Switch } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


const items: MenuItem[] = [
  // getItem('Navigation One', '1', <MailOutlined />),
  // getItem('Navigation Two', '2', <CalendarOutlined />),]

  getItem('User', 'User', <UserOutlined />, [
    getItem(<Link to="user/notifications"> Notifications</Link >, 'User-Notifications', <BellOutlined />),
    getItem(<Link to="user/activity"> Activity</Link >, 'User-Activity', <BookOutlined />),
    getItem(<Link to="user/friends"> Friends</Link >, 'User-Friends', <UserAddOutlined />),
    getItem(<Link to="user/statistic" > Statistic</ Link >, 'User-Statistic', <LineChartOutlined />),
    getItem(<Link to="user/settings"> Settings</Link >, 'User-Settings', <SettingOutlined />),
  ]),


  getItem('Club', 'Club', <UserOutlined />, [
    getItem(<Link to="club/statistic">Statistic</Link>, 'Club-Statistic', <LineChartOutlined />),
    getItem(<Link to="club/activity">Activity</Link>, 'Club-Activity', <BookOutlined />),
    getItem(<Link to="club/events">Events</Link>, 'Club-Events', <MacCommandOutlined />),
    getItem(<Link to="club/settings">Settings</Link>, 'Club-Settings', <SettingOutlined />),

  ]),

  getItem('Create Event', 'Events', <MacCommandOutlined />, [
    getItem(<Link to="create/check">New Check</Link>, 'Events-New Check', <ContainerOutlined />),
    getItem(<Link to="create/duel">Duel</Link>, 'Events-Duel', <ApartmentOutlined />),
    getItem(<Link to="create/competition">Competition</Link>, 'Events-Competition', <FlagOutlined />),
  ]),


  // world experience
  getItem('World', 'World', <GlobalOutlined />, [
    getItem(<Link to="world/activity">Activity</Link>, 'World-Activity', <BookOutlined />),
    getItem(<Link to="world/competition">Competition</Link>, 'World-Competition', <FlagOutlined />),
  ]),

  // getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
  //   getItem('Option 3', '3'),
  //   getItem('Option 4', '4'),
  //   getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  // ]),


  // getItem(
  //   <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //     Ant Design
  //   </a>,
  //   'link',
  //   <LinkOutlined style={{ color: "red" }} />,
  // ),
];

const Menu: React.FC = () => {


  return (

    <section >
      {/* <Divider type="vertical" /> */}
      {/* <br />
      <br /> */}
      <UIMenu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['Club', 'User', 'Events', 'World']}
        mode={'inline'}
        theme={"light"}
        items={items}
      />
    </section>
  );
};

export default Menu;
