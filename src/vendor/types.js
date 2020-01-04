// @flow

export type Request = {
  file: string,
  generated: string,
};

export type Project = {
  id?: number,
  url: string,
  key: string,
  requests?: Array<Request>,
};

export type User =
  | {
      id: number,
      email: string,
      firstname: string,
      lastname: string,
      credits: number,
      passwordTemp: boolean,
    }
  | {}
  | false;
