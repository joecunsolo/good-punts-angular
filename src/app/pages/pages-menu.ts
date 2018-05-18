import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Punts',
    icon: 'fa fa-binoculars', //nb-home',
    link: '/pages/punts',
    home: true,
  },
  {
    title: 'Picks',
    icon: 'fa fa-fire', //nb-home',
    link: '/pages/picks',
    home: true,
  },
  {
    title: 'Probabilities',
    icon: 'fa fa-star', //nb-home',
    link: '/pages/probabilities',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Performance',
    icon: 'fa fa-fighter-jet', //nb-home',
    link: '/pages/performance',
    home: true,
  },
  {
    title: 'Analysis',
    icon: 'fa fa-eye', //nb-home',
    link: '/pages/analysis',
    home: true,
    children: [
      {
        title: 'Horse Histories',
        link: '/download/hsitories',
      },
      {
        title: 'Runner Results',
        link: '/download/results',
      },
     ],
  },
  {
    title: 'Auth',
    icon: 'fa fa-lock',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
