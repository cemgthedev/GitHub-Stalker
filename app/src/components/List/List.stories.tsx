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
               login: 'cemgthedev',
               list: [
                {
                    login: 'cemgthedev',
                    avatar_url: 'https://avatars.githubusercontent.com/u/113810798?v=4',
                }
               ]
            } as ListProps
        } 
    />;