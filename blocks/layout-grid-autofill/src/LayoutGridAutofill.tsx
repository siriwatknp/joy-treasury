import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

const sizeMap = { sm: "256px", md: "300px", lg: "360px" };

export default function LayoutGridAutofill({
  sx,
  size = "md",
  ...props
}: BoxProps & { size?: "sm" | "md" | "lg" }) {
  return (
    <Box
      {...props}
      sx={[
        {
          "--grid-size": sizeMap[size],
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(var(--grid-size), 100%), 1fr))",
          gap: { xs: 2, md: 3 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
