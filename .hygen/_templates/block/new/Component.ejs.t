---
to: ../stories/<%=h.toNamePath(name)%>/src/<%= h.toName(name) %>.tsx
unless_exists: true
---
import React from "react";
import Box from "@mui/joy/Box";

export default function <%= h.toName(name) %>() {
  return (
    <Box>It's working</Box>
  );
}
