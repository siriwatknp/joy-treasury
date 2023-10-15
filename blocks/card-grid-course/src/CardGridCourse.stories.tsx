import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardGridCourse from "./CardGridCourse";

const meta = {
  title: "Card/Grid/Course",
  component: CardGridCourse,
  parameters: {
    layout: "centered",
    githubUsername: "", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardGridCourse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Course: Story = {
  render: () => (
    <div 
      style={{
        width: 340,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardGridCourse />
    </div>
  ),
};


