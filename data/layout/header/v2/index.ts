import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '(+237 659 77 31 32',
    mail: 'contact@ecomnet.online',
    address: 'Ecole les Battant, Yaoundée, Cameroon',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Get  A Quote',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
