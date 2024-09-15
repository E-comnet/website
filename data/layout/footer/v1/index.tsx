import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Transforming Businesses with Cutting-Edge IT Solutions for a Smarter, Connected Tomorrow.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
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
  },
  columnOne: {
    title: 'Get Free Link',
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
    title: 'Address',
    location: 'Ecole les Battant, Yaoundée, Cameroon ',
    mails: ['contact@ecomnet.online'],
    phoneNumbers: ['+237 659 77 31 32', '+49 178 30 44 528'],
  },

  footerBottom: {
    copyrightText: '© Ecomnet  2024 | All Rights Reserved',
    links: [
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
