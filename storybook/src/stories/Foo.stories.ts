import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Foo from '../../../dash/app/src/Foo';

const meta = {
  title: 'Example/Foo',
  component: Foo,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Foo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Foo',
  },
};
