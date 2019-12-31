// @flow
import moment from 'moment';

export const isDev: boolean = window.location.href.indexOf('localhost') !== -1;

const ids: Object = {};
export const uniqueId: string = (key: string, scope: string = 'global') => {
  if (ids[scope] === undefined) {
    ids[scope] = [];
  }

  let id = key;
  let idNum: number = 1;
  while (ids[scope].indexOf(id) !== -1) {
    id = key + '-' + idNum;
    idNum++;
  }

  ids[scope].push(id);
  return id;
};
