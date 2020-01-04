// @flow

import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import cn from 'classnames';

import './Icon.css';

type Props = {
  icon: string,
  className?: string,
  rotate?: 90 | 180 | 270 | false,
  spinning?: boolean,
};

const Icon = (props: Props) => {
  const [icon: string, setIcon] = useState('');

  useEffect(() => {
    async function loadIcon() {
      return await import(
        /* webpackMode: "eager" */ `@theme/assets/icons/${props.icon}.svg`
      );
    }
    loadIcon().then(loaded => setIcon(loaded.default));
  }, []);

  return (
    <span
      className={cn(
        props.className,
        'icon',
        props.rotate !== false ? `icon--rotate-${props.rotate}` : '',
        {
          'icon--animation-spin': props.spinning,
        }
      )}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
};

Icon.defaultProps = {
  className: '',
  spinning: false,
  rotate: false,
};

export default Icon;
