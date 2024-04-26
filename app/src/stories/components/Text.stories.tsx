import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Text } from '../../components/Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Simple Components/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: { 
      control: 'radio', 
      options: ['xl', 'lg', 'md', 'sm', 'xs']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    size: 'md',
    children: 'Text',
  },
};

export const SizeXL: Story = {
    args: {
      size: 'xl',
      children: 'Text',
    },
};

export const SizeLG: Story = {
    args: {
      size: 'lg',
      children: 'Text',
    },
};

export const SizeMD: Story = {
    args: {
      size: 'md',
      children: 'Text',
    },
};

export const SizeSM: Story = {
    args: {
      size: 'sm',
      children: 'Text',
    },
};

export const SizeXS: Story = {
    args: {
      size: 'xs',
      children: 'Text',
    },
};