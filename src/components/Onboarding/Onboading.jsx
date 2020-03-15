// @flow

import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useIntl } from 'react-intl';

import OnboardingSignIn from './Signin.jsx';
import OnboardingResetPassword from './ResetPassword.jsx';

const onboarding = () => {
  const [resetPw, setResetPw] = useState(false);
  const { formatMessage } = useIntl();

  return (
    <div className="w-full max-w-xs">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {resetPw ? (
          <OnboardingResetPassword setSignIn={() => setResetPw(false)} />
        ) : (
          <OnboardingSignIn setResetPw={() => setResetPw(true)} />
        )}
      </div>
      <p className="text-center text-gray-500 text-xs">
        {formatMessage(
          { id: 'onboarding.join' },
          { email: <a href="mailto:nico@sayhello.ch">nico@sayhello.ch</a> }
        )}
      </p>
    </div>
  );
};

export default onboarding;
