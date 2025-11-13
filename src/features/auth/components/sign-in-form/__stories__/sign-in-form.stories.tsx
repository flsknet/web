import type { Meta, StoryObj } from "@storybook/react-vite";

import { SignInForm } from "..";

export default {
  title: "Auth/Sign In Form",
  component: SignInForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SignInForm>;

type SignInFormStory = StoryObj<typeof SignInForm>;

export const Default: SignInFormStory = {
  args: {},
};
