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
                avatar_url: 'https://avatars.githubusercontent.com/u/113810798?v=4',
                created_at: '2022-09-18T01:45:16Z',
                updated_at: '2023-02-13T01:17:52Z',
                followers: 3,
                following: 2
            } as CardProps
        } 
    />;