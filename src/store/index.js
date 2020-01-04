// @flow

import createStore from 'unistore';
import devtools from 'unistore/devtools';
import type { User } from '@vendor/types';
import axios from 'axios';
import { apiBase } from '@vendor/config';
import { defaultLocale, locales } from '@vendor/intl';

const initialState = {
  user: {},
  projects: false,
  intlLocale: defaultLocale,
  intlMessages: locales[defaultLocale][1],
};
export const store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState));

export const storeUserActions = store => ({
  fetchMe: async ({ user }) => {
    try {
      const resp = await axios.get(`${apiBase}user/me/`);
      if (resp.status === 200) {
        return {
          user: resp.data,
        };
      }
    } catch (e) {
      return {
        user: false,
      };
    }
  },
  fetchProjects: async ({ projects }) => {
    try {
      const resp = await axios.get(`${apiBase}user/me/projects/`);
      if (resp.status === 200) {
        return {
          projects: resp.data,
        };
      }
    } catch (e) {
      return {
        projects: [],
      };
    }
  },
  setEmptyUser: ({ user }) => ({ user: {} }),
  setFalseUser: ({ user }) => ({ user: false }),
});

export const storeLocaleActions = store => ({
  setIntlLocale: ({ intlLocale }, locale) => ({ intlLocale: locale }),
  setIntlMessages: ({ intlMessages }, messages) => ({ intlMessages: messages }),
});
