import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FeatureCard from '../../../site/components/FeatureCard';

const meta = {
  title: 'Example/FeatureCard',
  component: FeatureCard,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'FeatureCard',
  },
};
