import { ComponentMeta } from '@storybook/react';

import { Card, CardProps } from './index';

export default {
  title: 'Components/Card',
  component: Card,
  
} as ComponentMeta<typeof Card>;

export const Primary = () => 
    <Card 
        {...
            {
                name: 'Carlos Eduardo de Moura Gomes',
                public_repos: 18,
                followers: 3,
                following: 2
            } as CardProps
        } 
    />;