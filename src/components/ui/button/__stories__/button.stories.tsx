import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, type ButtonProps } from "..";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonProps>;

type ButtonStory = StoryObj<ButtonProps>;

export const Default: ButtonStory = {
  args: {
    children: "Submit",
  },
};

export const Secondary: ButtonStory = {
  args: {
    variant: "secondary",
    children: "Cancel",
  },
};

export const Danger: ButtonStory = {
  args: {
    variant: "danger",
    children: "Delete",
  },
};
