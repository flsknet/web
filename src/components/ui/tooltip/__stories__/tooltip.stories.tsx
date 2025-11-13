import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "~/components/ui/button";

import { Tooltip, type TooltipProps } from "..";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<TooltipProps>;

type TooltipStory = StoryObj<TooltipProps>;

export const Default: TooltipStory = {
  args: {
    children: <Button>Hover me!</Button>,
    label: "This is a tooltip.",
  },
};
