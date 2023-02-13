import { ComponentMeta } from '@storybook/react';
import { RepositoryProps } from '../PopUp';

import { Table, TableProps } from './index';

export default {
  title: 'Components/Table',
  component: Table,
  
} as ComponentMeta<typeof Table>;

export const Primary = () => 
    <Table 
        {...
            {
               list: [
                {
                    id: 21,
                    language: 'TypeScript',
                    name: 'GitHub Stalker',
                    created_at: '2023-01-27T00:34:59Z',
                    updated_at: '2023-02-12T22:07:24Z',
                    stargazers_count: 21,
                    watchers_count: 123,
                    forks_count:1000
                } as RepositoryProps
               ]
            } as TableProps
        } 
    />;