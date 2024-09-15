import { TeamSectionProps } from '@/src/sections/team/v1';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'our active members',
    title: 'Transforming Challenges into Seamless Solutions',
  },
  cards: [
    {
      image: {
        src: '/assets/images/team/people-1.png',
        alt: 'Olivia Davis-Mbou',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Olivia Davis-Mbou',
      about: 'President of Sales',
    },
    {
      image: {
        src: '/assets/images/team/people-2.png',
        alt: 'Glwadys Mvondo',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Glwadys Mvondo',
      about: 'Human resources manager',
    },
    {
      image: {
        src: '/assets/images/team/people-3.png',
        alt: 'Vanessa Baheten',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Vanessa Baheten',
      about: 'Marketing Manager',
    },
  ],
};
