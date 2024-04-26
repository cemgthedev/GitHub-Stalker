import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Composite Components/Navbar',
  component: Navbar,
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
        <Heading className="max-md:text-2xl">LOGO</Heading>
        <Navbar.Menu reponsive>
          <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
            <a href={'/home'} className="flex items-center gap-1 font-semibold">
              Home
            </a>
          </Navbar.MenuItem>
          <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
            <a href={'/dashboard'} className="flex items-center gap-1 font-semibold">
              Dashboard
            </a>
          </Navbar.MenuItem>
          <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
            <a href={'/products'} className="flex items-center gap-1 font-semibold" >
              Products
            </a>
          </Navbar.MenuItem>
          <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
            <a href={'/cart'} className="flex items-center gap-1 font-semibold" >
              Cart
            </a>
          </Navbar.MenuItem>
          <Navbar.MenuItem style='dark' className="rounded-[4px] p-2 group">
            <a href={'/about'} className="flex items-center gap-1 font-semibold" >
              About
            </a>
          </Navbar.MenuItem>
        </Navbar.Menu>
        <Navbar.ResponsiveMenu>
          <Button className="w-fit border-2 border-slate-50">
            User Options
          </Button>
          <Navbar.ResponsiveMenuItem>
            <Button className="w-fit border-2 border-slate-50">
              Responsive Menu
            </Button>
          </Navbar.ResponsiveMenuItem>
        </Navbar.ResponsiveMenu>
      </>
    )
  },
} satisfies Meta<typeof Navbar>;

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