// @flow

export const navigation = {
  projects: '/',
  add: '/add',
};

export const isDev = window.location.href.indexOf('localhost:') !== -1;
export const apiBase = isDev
  ? 'http://localhost:9092/'
  : 'https://api.critical-css.io/';
