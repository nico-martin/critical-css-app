// @flow
import React from 'react';
import { render, h } from 'preact';
import {
  Button,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  InputText,
  InputTextarea,
  InputSelect,
} from '@theme';
import cn from 'classnames';
import axios from 'axios';
import idb from '@store/storeIDB';
import { useState } from 'preact/hooks';
import { apiBase } from '@vendor/config';
import { connect } from 'unistore/preact';
import { storeUserActions } from '@store/index';

const onboarding = connect(
  'user',
  storeUserActions
)(({ fetchMe }) => {
  const [formProcessing: boolean, setFormProcessing] = useState(false);
  const [error: string, setError] = useState('');

  return (
    <div className="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 px-3 py-10 bg-gray-200 flex justify-center">
      <div className="w-full max-w-xs">
        <Form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={data => {
            setError('');
            setFormProcessing(true);
            axios
              .post(`${apiBase}user/signin/`, {
                email: data.email,
                password: data.password,
              })
              .then(resp => {
                idb.set('jwt', resp.data.token);
                axios.defaults.headers.common = {
                  Authorization: 'Bearer ' + resp.data.token,
                };
                fetchMe();
              })
              .catch(err => {
                setError('Email or password are not correct');
                setFormProcessing(false);
              });
          }}
        >
          <InputText
            name="email"
            label="Email"
            register={{
              required: 'This field is required',
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'has to be an Email',
              },
            }}
            type="email"
          />
          <InputText
            name="password"
            label="Password"
            register={{
              required: 'This field is required',
            }}
            type="password"
          />
          {error !== '' && <FormError>{error}</FormError>}
          <FormControls>
            <Button
              text="Primary"
              type="submit"
              loading={formProcessing}
              style="primary"
            />
          </FormControls>
        </Form>
        {/*
        <p className="text-center text-gray-500 text-xs">
          &copy;2019 Acme Corp. All rights reserved.
        </p>
        */}
      </div>
    </div>
  );
});

export default onboarding;
