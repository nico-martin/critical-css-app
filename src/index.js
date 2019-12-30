// @flow
import './app/app.jsx';
import { isDev } from '@vendor/helpers';

isDev && document.body.classList.add('dev');

console.log('test');
