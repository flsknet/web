import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox, type CheckboxProps } from "..";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<CheckboxProps>;

type CheckboxStory = StoryObj<CheckboxProps>;

export const Default: CheckboxStory = {
  args: {
    children: "Default",
  },
};

export const Secondary: CheckboxStory = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Danger: CheckboxStory = {
  args: {
    children: "Danger",
    variant: "danger",
  },
};
