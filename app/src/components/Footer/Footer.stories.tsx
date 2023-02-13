import { ComponentMeta } from '@storybook/react';

import { Footer, FooterProps } from './index';

export default {
  title: 'Components/Footer',
  component: Footer,
  
} as ComponentMeta<typeof Footer>;

export const Primary = () => 
    <Footer 
        {...
            {
                projectName: 'GitHub Stalker',
                licenceLabel: 'Copyright (c) 2023 Carlos Eduardo de Moura Gomes'
            } as FooterProps
        } 
    />;