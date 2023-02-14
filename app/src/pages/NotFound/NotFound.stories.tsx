import {ComponentMeta} from '@storybook/react';

import { NotFound } from './index';

export default {
    title: 'Pages/NotFound',
    component: NotFound
} as ComponentMeta<typeof NotFound>

export const Primary = () => 
    <NotFound
        {...
            {
                message: 'Usuário não encontrado',
                textButton: 'Voltar a página inicial'
            }
        }
    />