import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';
import { Label } from '../../components/Label';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Composite Components/Footer',
  component: Footer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullScreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    style: { 
      control: 'select', 
      options: ['primary', 'secondary', 'dark']
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
        <Footer.Row className="flex items-center justify-center">
            <Footer.Column>
                <hr />
            </Footer.Column>
            <div className="flex gap-1 w-fit">
                <a href={"https://github.com/cemgthedev/GitHub-Stalker"} target="_blank" className="hover:opacity-60 p-1 rounded-[4px] duration-150">
                    GitHub
                </a>
                <a href={"https://www.instagram.com/cemg.dev/"} target="_blank" className="hover:opacity-60 p-1 rounded-[4px] duration-150">
                    Instagram
                </a>
                <a href={"https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/"} target="_blank" className="hover:opacity-60 p-1 rounded-[4px] duration-150">
                    Linkedln
                </a>
            </div>
            <Footer.Column>
                <hr />
            </Footer.Column>
        </Footer.Row>
        <Footer.Row>
            <Footer.Column className="gap-0">
                <Heading className="text-center">GitHub Stalker</Heading>
                <Label size="xs" className="text-center">Copyright (c) 2022 Carlos Eduardo de Moura Gomes</Label>
            </Footer.Column>
        </Footer.Row>
      </>
    )
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Primary: Story = {
  args: {
    style: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    style: 'secondary'
  }
};

export const Dark: Story = {
  args: {
    style: 'dark'
  }
};