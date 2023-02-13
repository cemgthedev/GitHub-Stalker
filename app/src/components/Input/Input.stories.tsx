import { ComponentMeta } from '@storybook/react';

import { Input, InputProps } from './index';

export default {
  title: 'Components/Input',
  component: Input,
  
} as ComponentMeta<typeof Input>;

export const Primary = () => 
    <Input 
        {...
            {
                placeholder: 'Digite o nome de usuário'
            } as InputProps
        } 
    />;