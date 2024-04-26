import { Text } from '@/components/Text';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Image from 'next/image';
import { Card } from '../../components/Card';
import { Label } from '../../components/Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Composite Components/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    orientation: { 
      control: 'radio', 
      options: ['vertical', 'horizontal']
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: fn(), 
    children: (
      <>
        <Card.Header>
          <Image 
            src="https://thispersondoesnotexist.com/"
            alt="..."
            width={180}
            height={212}
          />
        </Card.Header>
        <Card.Body>
          <Label>Lorem Ipsulum</Label>
          <Text className='w-[180px] text-wrap'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </Text>
        </Card.Body>
      </>
    )
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const VerticalOrientation: Story = {
    args: {
      orientation: 'vertical',
    },
};

export const HorizontalOrientation: Story = {
  args: {
    orientation: 'horizontal',
  },
};