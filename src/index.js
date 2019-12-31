// @flow

import './app/app.jsx';
import './styles.css';
import { isDev } from '@vendor/helpers';

isDev && document.body.classList.add('dev');
