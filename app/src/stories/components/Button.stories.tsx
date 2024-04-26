import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Simple Components/Button',
  component: Button,
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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    style: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    style: 'secondary',
    children: 'Button',
  },
};

export const Dark: Story = {
  args: {
    style: 'dark',
    children: 'Button',
  },
};

export const Success: Story = {
  args: {
    style: 'success',
    children: 'Button',
  },
};

export const Attention: Story = {
  args: {
    style: 'attention',
    children: 'Button',
  },
};

export const Danger: Story = {
  args: {
    style: 'danger',
    children: 'Button',
  },
};

export const PrimaryOutline: Story = {
  args: {
    style: 'primary-outline',
    children: 'Button',
  },
};

export const SecondaryOutline: Story = {
  args: {
    style: 'secondary-outline',
    children: 'Button',
  },
};

export const DarkOutline: Story = {
  args: {
    style: 'dark-outline',
    children: 'Button',
  },
};

export const SuccessOutline: Story = {
  args: {
    style: 'success-outline',
    children: 'Button',
  },
};

export const AttentionOutline: Story = {
  args: {
    style: 'attention-outline',
    children: 'Button',
  },
};

export const DangerOutline: Story = {
  args: {
    style: 'danger-outline',
    children: 'Button',
  },
};