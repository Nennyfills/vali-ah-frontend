// react libraries
import * as React from 'react';

// third-party libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// components
import Button from './index';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')} className="">Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} className="">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
