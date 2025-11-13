import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "..";

export default {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

type ButtonStory = StoryObj<typeof Spinner>;

export const Default: ButtonStory = {
  args: {},
};
