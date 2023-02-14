import {ComponentMeta} from '@storybook/react';

import { Search } from './index';

export default {
    title: 'Pages/Search',
    component: Search
} as ComponentMeta<typeof Search>

export const Primary = () => <Search />