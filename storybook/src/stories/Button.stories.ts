import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
// import { Button } from './Button';
import FeatureCard from '../../../site/components/FeatureCard';

const meta = {
  title: 'Example/Button',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'FeatureCard',
  },
};
