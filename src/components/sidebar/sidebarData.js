import React from 'react';
import { MdDashboard, MdApps } from 'react-icons/md';
import { AiFillLayout } from 'react-icons/ai';
import { RiLoginCircleFill } from 'react-icons/ri';
import { IoMdPaper } from 'react-icons/io';
import { GiAbstract021, GiAbstract031 } from 'react-icons/gi';
import { FaTable, FaFile, FaChartBar } from 'react-icons/fa';

const iconData = [
  {
    title: 'Menu',
    icons: [
      {
        name: 'Dashboard',
        icon: <MdDashboard />,
        data: ['Sales', 'Analytics', 'Customers', 'Inventory', 'Orders'],
      },
      {
        name: 'Apps',
        icon: <MdApps />,
        data: ['Calendar', 'Email', 'Contacts', 'Tasks', 'Notes'],
      },
      {
        name: 'Layouts',
        icon: <AiFillLayout />,
        data: ['Grid', 'Sidebar', 'Header', 'Footer', 'Cards'],
      },
    ],
  },
  {
    title: 'Pages',
    icons: [
      {
        name: 'Authentication',
        icon: <RiLoginCircleFill />,
        data: ['Login', 'Signup', 'Forgot Password', 'Reset Password'],
      },
      {
        name: 'Landing',
        icon: <GiAbstract021 />,
        data: ['Hero Section', 'Features', 'Pricing', 'Testimonials'],
      },
      {
        name: 'Pages',
        icon: <IoMdPaper />,
        data: ['About Us', 'Contact', 'FAQ', 'Terms of Service'],
      },
    ],
  },
  {
    title: 'Components',
    icons: [
      {
        name: 'Base UI',
        icon: <GiAbstract031 />,
        data: ['Buttons', 'Inputs', 'Dropdowns', 'Alerts', 'Modals'],
      },
      {
        name: 'Advance UI',
        icon: <GiAbstract031 />,
        data: ['Charts', 'Progress Bars', 'Tabs', 'Carousel', 'Datepicker'],
      },
      {
        name: 'Widgets',
        icon: <FaTable />,
        data: ['Weather Widget', 'Social Media Feed', 'News Ticker'],
      },
      {
        name: 'Forms',
        icon: <FaFile />,
        data: ['Contact Form', 'Registration Form', 'Feedback Form'],
      },
      {
        name: 'Tables',
        icon: <FaTable />,
        data: ['Product Table', 'User Table', 'Sales Table'],
      },
      {
        name: 'Charts',
        icon: <FaChartBar />,
        data: ['Line Chart', 'Bar Chart', 'Pie Chart', 'Area Chart'],
      },
    ],
  },
];

export let iconsStore = [
  MdDashboard, MdApps ,AiFillLayout,RiLoginCircleFill,IoMdPaper,GiAbstract021, GiAbstract031,FaTable, FaFile, FaChartBar
]


export default iconData;
