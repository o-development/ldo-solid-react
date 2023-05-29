import type { Meta, StoryObj } from "@storybook/react";

import App from "./App";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof App> = {
  title: "Example/ATest",
  component: App,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof App>;

export const Item: Story = {
  args: {},
};
