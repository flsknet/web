import type { Meta, StoryFn } from "@storybook/react-vite";

import { TextInput } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

import { Form } from "..";

export default {
  title: "UI/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Form>;

type FormStory = StoryFn<typeof Form>;

export const Default: FormStory = () => (
  <Form>
    <TextInput
      name="username"
      label="Username"
      placeholder="John Doe"
    />
    <TextInput
      name="password"
      label="Password"
      placeholder="Enter your password."
      type="password"
    />
    <Button>Submit</Button>
  </Form>
);
