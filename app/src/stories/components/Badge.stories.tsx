import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../components/Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Simple Components/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    style: { 
      control: 'select', 
      options: ['primary', 'secondary', 'dark', 'success', 'attention', 'danger', 'primary-outline', 'secondary-outline', 'dark-outline', 'success-outline', 'attention-outline', 'danger-outline']
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    style: 'primary',
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
    children: 'Badge',
  },
};

export const Dark: Story = {
  args: {
    style: 'dark',
    children: 'Badge',
  },
};

export const Success: Story = {
  args: {
    style: 'success',
    children: 'Badge',
  },
};

export const Attention: Story = {
  args: {
    style: 'attention',
    children: 'Badge',
  },
};

export const Danger: Story = {
  args: {
    style: 'danger',
    children: 'Badge',
  },
};

export const PrimaryOutline: Story = {
  args: {
    style: 'primary-outline',
    children: 'Badge',
  },
};

export const SecondaryOutline: Story = {
  args: {
    style: 'secondary-outline',
    children: 'Badge',
  },
};

export const DarkOutline: Story = {
  args: {
    style: 'dark-outline',
    children: 'Badge',
  },
};

export const SuccessOutline: Story = {
  args: {
    style: 'success-outline',
    children: 'Badge',
  },
};

export const AttentionOutline: Story = {
  args: {
    style: 'attention-outline',
    children: 'Badge',
  },
};

export const DangerOutline: Story = {
  args: {
    style: 'danger-outline',
    children: 'Badge',
  },
};