import type { Meta, StoryObj } from "@storybook/react-vite";

import { SignUpForm } from "..";

export default {
  title: "Auth/Sign Up Form",
  component: SignUpForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignUpForm>;

type SignUpFormStory = StoryObj<typeof SignUpForm>;

export const Default: SignUpFormStory = {
  args: {},
};
