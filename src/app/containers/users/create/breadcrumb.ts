import { Link } from 'src/app/core/models/link.model';

export const breadcrumb: Array<Link> = [
  {
    title: 'Home',
    url: '/',
    current: false,
  },

  {
    title: 'New Users',
    url: '/new',
    current: true,
  },
];
