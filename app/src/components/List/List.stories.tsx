import { ComponentMeta } from '@storybook/react';

import { List, ListProps } from './index';

export default {
  title: 'Components/List',
  component: List,
  
} as ComponentMeta<typeof List>;

export const Primary = () => 
    <List 
        {...
            {
               list: [
                {
                    avatar_url: 'https://avatars.githubusercontent.com/u/113810798?v=4',
                    login: 'cemgthedev'
                }
               ]
            } as ListProps
        } 
    />;