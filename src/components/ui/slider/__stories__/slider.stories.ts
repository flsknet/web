import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider, type SliderProps } from "..";

export default {
  title: "UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<SliderProps>;

type SliderStory = StoryObj<SliderProps>;

export const Default: SliderStory = {
  args: {},
};

export const WithLabel: SliderStory = {
  args: {
    label: "Slider label",
  },
};
