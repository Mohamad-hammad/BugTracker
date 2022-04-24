import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
export const SidebarData = [
  {
    title: 'User123',
    path: '/Profile',
    icon: <FaIcons.FaUserAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Tickets',
    path: '/Administration',
    icon: <GiIcons.GiTicket/>,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/Administration',
    icon: <FaIcons.FaFileCode />,
    cName: 'nav-text'
  },
  {
    title: 'Administration',
    path: '/Administration',
    icon: <MdIcons.MdManageAccounts />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
  
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Hammad',
    path: '/hammad',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];

