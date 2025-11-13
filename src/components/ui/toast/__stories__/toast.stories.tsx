import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "~/components/ui/button";

import { Toaster, toast } from "..";

export default {
  title: "UI/Toaster",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export const Default: StoryObj = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: "Default toast",
            description: "This is a default toast.",
          });
        }}
      >
        Add default toast
      </Button>
    </>
  ),
};

export const Success: StoryObj = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: "Success toast",
            description: "This is a success toast.",
            variant: "success",
          });
        }}
      >
        Add success toast
      </Button>
    </>
  ),
};

export const Warning: StoryObj = {
  render: () => (
    <>
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: "Warning toast",
            description: "This is a warning toast.",
            variant: "warning",
          });
        }}
      >
        Add warning toast
      </Button>
    </>
  ),
};

export const Danger: StoryObj = {
  render: () => (
    <>
      <Toaster />
      <Button
        variant="danger"
        onClick={() => {
          toast({
            title: "Danger toast",
            description: "This is a danger toast.",
            variant: "danger",
          });
        }}
      >
        Add danger toast
      </Button>
    </>
  ),
};
