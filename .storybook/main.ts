import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
} satisfies StorybookConfig;
