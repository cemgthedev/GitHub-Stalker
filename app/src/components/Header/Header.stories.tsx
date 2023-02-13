import { ComponentMeta } from '@storybook/react';

import { Header, HeaderProps } from './index';

export default {
  title: 'Components/Header',
  component: Header,
  
} as ComponentMeta<typeof Header>;

export const Primary = () => 
    <Header 
        {...
            {
                location: 'Quixadá',
                html_url: 'https://github.com/cemgthedev',
                email: 'mailto:cemg.the.dev@gmail.com'
            } as HeaderProps
        } 
    />;