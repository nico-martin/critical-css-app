// @flow

import { render, h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {
  Button,
  ButtonGroup,
  Icon,
  Form,
  FormFieldset,
  FormControls,
  FormError,
  InputText,
  InputTextarea,
  InputSelect,
  /*
InputRadio,
 InputCheckboxGroup,
  */
} from '@theme';
import cn from 'classnames';

const example = () => {
  const [isLoading: boolean, setLoading] = useState(false);
  const click = () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const TestForm = ({ className }: { className: string } = '') => {
    const [formProcessing: boolean, setFormProcessing] = useState(false);
    const [error: string, setError] = useState('');
    // uses https://react-hook-form.com/
    return (
      <Form
        onSubmit={data => {
          if (error === '') {
            setError('This is an Error. Please submit again');
          } else {
            setError('');
            setFormProcessing(true);
            window.setTimeout(() => {
              setFormProcessing(false);
              alert('form submitted! Please visit the console for the output');
              console.log(data);
            }, 3000);
          }
        }}
        className={cn(className)}
      >
        <FormFieldset legend="Personal Data">
          <InputText
            name="name"
            label="Name"
            placeholder="Muster"
            register={{ required: 'This field is required' }}
            inline
          />
          <InputText
            name="vorname"
            label="Vorname"
            placeholder="Max"
            register={{
              required: 'This field is required',
              minLength: {
                value: 11,
                message: 'At least 11 characters',
              },
            }}
            inline
          />
          <InputText
            name="email"
            label="Email"
            placeholder="max.muster@mail.com"
            register={{
              required: 'This field is required',
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'has to be an Email',
              },
            }}
            type="email"
          />
        </FormFieldset>
        <FormFieldset legend="About">
          <InputTextarea
            name="about"
            label="About me"
            placeholder="Hallo"
            register={{ required: 'This field is required' }}
            value="hallo welt"
            rows={10}
            inline
          />
        </FormFieldset>
        <FormFieldset>
          <InputSelect
            name="position"
            label="Position"
            placeholder="wählen"
            emptyOption={true}
            register={{ required: 'This field is required' }}
            options={{
              stuermer: 'Stürmer',
              verteidiger: 'Verteidiger',
              torhueter: 'Torhüter',
            }}
            value="verteidiger"
            inline
          />
        </FormFieldset>
        <FormControls>
          {error !== '' && <FormError>{error}</FormError>}
          <Button
            text="Primary"
            type="submit"
            loading={formProcessing}
            style="primary"
          />
        </FormControls>
      </Form>
    );
  };

  return (
    <div className="overflow-hidden border-t border-l border-r border-gray-400 p-4 px-3 py-10 bg-gray-200 flex justify-center">
      <div className="w-full max-w-xl">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <ButtonGroup>
            <Button
              text="Primary"
              style="primary"
              loading={isLoading}
              onClick={click}
              large
            />
            <Button
              text="Secondary loader"
              style="secondary"
              loading={isLoading}
              icon="mdi/check"
              onClick={click}
            />
            <Button
              text="No Button loading"
              style="nobutton"
              loading={isLoading}
              onClick={click}
            />
          </ButtonGroup>
          <p className="mt-4">
            <Icon icon="mdi/account" /> Hallo Welt
          </p>
          <div className="m4-4">
            <h1>Hallo Welt</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor{' '}
              <a href="https://sayhello.ch">invidunt ut labore</a> et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <TestForm className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default example;
