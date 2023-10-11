---
to: ../blocks/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import <%=h.toName(name)%> from "./<%=h.toName(name)%>";

const meta = {
  title: "<%=h.getFirstPascal(name)%>/<%=h.getSecondPascal(name)%>/<%=h.getThirdPascal(name)%>",
  component: <%=h.toName(name)%>,
  parameters: {
    layout: "centered",
    githubUsername: "", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof <%=h.toName(name)%>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const <%=h.getThirdPascal(name)%>: Story = {
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
      <<%=h.toName(name)%> />
    </div>
  ),
};


