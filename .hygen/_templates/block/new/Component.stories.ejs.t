---
to: ../stories/<%=h.toNamePath(name)%>/src/<%=h.toName(name)%>.stories.tsx
unless_exists: true
---
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import <%=h.toName(name)%> from "./<%=h.toName(name)%>";

const meta = {
  title: "<%=h.getFirstPascal(name)%>/<%=h.getSecondPascal(name)%>/<%=h.getThirdPascal(name)%>",
  component: <%=h.toName(name)%>,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof <%=h.toName(name)%>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <<%=h.toName(name)%> />
    </div>
  ),
};


