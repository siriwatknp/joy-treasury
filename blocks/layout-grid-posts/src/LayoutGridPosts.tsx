import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

export default function LayoutGridPosts({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridAutoRows: { xs: "clamp(256px, 40vh, 300px)" },
          gridTemplateColumns: {
            sm: "1fr 1fr",
            lg: "2fr minmax(400px, 1fr)",
          },
          gap: 2,
          "& > :first-child": {
            gridColumn: { sm: "1 / -1", lg: "span 1" },
            gridRow: { lg: "span 2" },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
