import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/joy";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardGridCourse, { CardGridCourseProps, COLORS } from "./CardGridCourse";
import IconScience from "./IconScience";
import IconWrapper from "./IconWrapper";

const meta: Meta<typeof CardGridCourse> = {
  title: "Card/Grid/Course",
  component: CardGridCourse,
  parameters: {
    layout: "centered",
    githubUsername: "", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
};

export default meta;
type Story = StoryObj<typeof meta>;

const props: CardGridCourseProps = {
  icon: (
    <IconWrapper bgColor="#E3F7FA">
      <IconScience className="card--icon" sx={{ color: '#54C7D7' }} />
    </IconWrapper>
  ),
  title: "Human Computer Interaction",
  description:
    "How to carry out the design process involved in interaction design, navigation design, and screen design.",
  url: "#test",
};

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
      <CardGridCourse {...props} />
    </div>
  ),
};
