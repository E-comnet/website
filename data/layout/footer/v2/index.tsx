import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/',
    },
  ],
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },

    ],
  },
  columnTwo: {
    title: 'Service Links',
    links: [
      {
        label: 'Cloud services',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Backup solutions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Network security',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Monitoring',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'IT Consulting',
        href: '/',
        openNewTab: false,
      },
    ],
  },

  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+237 659 77 31 32',
    mail: 'contact@ecomnet.online',
    location: 'Ecole les Battant, Yaoundée, Cameroon',
  },
  footerBottom: {
    copyrightText: '© Ecomnet  2024 | All Rights Reserved',
    links: [
      {
        label: 'Contact Us',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
};
