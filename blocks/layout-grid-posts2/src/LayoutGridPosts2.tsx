import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

export default function LayoutGridPosts2({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 0.5fr 0.5fr" },
          gridAutoRows: "minmax(min(40vh, 256px), auto)",
          gap: { xs: 2, md: 3 },
          "& > :first-child": {
            gridColumn: { xs: "span 2", md: "span 1" },
            gridRow: { md: "span 2" },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
