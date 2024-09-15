import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    title: 'Service',
    subMenuItems: [
      {
        label: 'Service List',
        href: '/services',
      },
      {
        label: 'Website/App Development',
        href: '/services/development',
      },
      {
        label: 'Multimedia/Advertising Production',
        href: '/services/advertising',
      },
      {
        label: 'Testing/Communication Campaigns',
        href: '/services/testing',
      },
      {
        label: 'IT/Security/Multimedia Equipment Sales',
        href: '/services/equipment',
      },
      {
        label: 'Call Center',
        href: '/services/call-center',
      },
      {
        label: 'Training in Project Management/Fundraising',
        href: '/services/training/management',
      },
      {
        label: 'Training in Sales/Digital Marketing',
        href: '/services/training/sales',
      },
      {
        label: 'Training in FullStack Development/DevOps',
        href: '/services/training/dev',
      },
    ],
  },
  {
        label: 'FAQ',
        href: '/faq',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
