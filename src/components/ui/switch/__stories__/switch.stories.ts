import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch, type SwitchProps } from "..";

export default {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<SwitchProps>;

type SwitchStory = StoryObj<SwitchProps>;

export const Default: SwitchStory = {
  args: {},
};

export const WithLabel: SwitchStory = {
  args: {
    label: "Switch",
  },
};
