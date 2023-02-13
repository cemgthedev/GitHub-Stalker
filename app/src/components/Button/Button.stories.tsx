import { ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button name='Button Title' />;