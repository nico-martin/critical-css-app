// @flow

import './styles/styles.css';
import './app/app.jsx';
import { isDev } from '@vendor/helpers';

isDev && document.body.classList.add('dev');
