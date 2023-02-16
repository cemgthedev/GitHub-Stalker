import { ComponentMeta } from '@storybook/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'

import {Home} from './index';

export default {
    title: 'Pages/Home',
    component: Home,
} as ComponentMeta<typeof Home>

export const Primary = () => 
    <MemoryRouter initialEntries={['/cemgthedev/stalking/cemgthedev']}>
        <Routes>
            <Route
                element={<Home/>}
                path='/GitHub-Stalker/:userNameHome/stalking/:userNameResearched'
            />
        </Routes>
    </MemoryRouter>
