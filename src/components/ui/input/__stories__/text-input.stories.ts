import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextInput, type TextInputProps } from "..";

export default {
  title: "UI/Text Input",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<TextInputProps>;

type TextInputStory = StoryObj<TextInputProps>;

export const Default: TextInputStory = {
  args: {
    placeholder: "Enter a text value...",
  },
};

export const WithLabel: TextInputStory = {
  args: {
    label: "Text Input",
    placeholder: "Enter a text value...",
  },
};
