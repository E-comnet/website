import { TestimonialSectionProps } from '@/src/sections/testimonial/grid';

export const testimonialSectionData: TestimonialSectionProps = {
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.jpg',
          alt: 'Jane Cooper',
        },
        name: 'Jane Cooper',
        about: 'Team Leader',
      },
      speech:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.jpg',
          alt: 'Robert Fox',
        },
        name: 'Robert Fox',
        about: 'Software Development Manager',
      },
      speech:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-11.jpeg',
          alt: 'April Cabrera',
        },
        name: 'April Cabrera',
        about: 'Team Leader',
      },
      speech:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-14.jpeg',
          alt: 'Kevin Deen',
        },
        name: 'Kevin Deen',
        about: 'Software Development Manager',
      },
      speech:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
      rating: 5,
    },
  ],
};
