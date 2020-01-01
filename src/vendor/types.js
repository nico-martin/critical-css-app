// @flow

export type Project = {};

type UserObject = {
  id: number,
  email: string,
  firstname: string,
  lastname: string,
  credits: number,
  projects: Array<Project>,
};

export type User = UserObject | {} | false;
