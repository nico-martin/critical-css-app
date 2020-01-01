// @flow

import createStore from 'unistore';
import devtools from 'unistore/devtools';
import type { User } from '@vendor/types';
import axios from 'axios';
import { apiBase } from '@vendor/config';

const initialState = { user: {} };
export const store =
  process.env.NODE_ENV === 'production'
    ? createStore(initialState)
    : devtools(createStore(initialState));

export const storeUserActions = store => ({
  fetchMe: async ({ user }) => {
    try {
      const resp = await axios.get(`${apiBase}user/me/`);
      if (resp.status === 200) {
        return { user: resp.data };
      }
    } catch (e) {
      return {
        user: false,
      };
    }
  },
  setEmptyUser: ({ user }) => ({ user: {} }),
  setFalseUser: ({ user }) => ({ user: false }),
});
