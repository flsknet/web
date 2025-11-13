import type { Meta, StoryObj } from "@storybook/react-vite";

import { NumberInput, type NumberInputProps } from "..";

export default {
  title: "UI/Number Input",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<NumberInputProps>;

type NumberInputStory = StoryObj<NumberInputProps>;

export const Default: NumberInputStory = {
  args: {
    placeholder: "Enter a number...",
  },
};

export const WithLabel: NumberInputStory = {
  args: {
    label: "Number Input",
    placeholder: "Enter a number...",
  },
};

export const WithControls: NumberInputStory = {
  args: {
    placeholder: "Enter a number...",
    withControls: true,
  },
};
