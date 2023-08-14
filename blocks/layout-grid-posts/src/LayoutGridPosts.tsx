import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

export default function LayoutGridPosts({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridAutoRows: "minmax(min(40vh, 256px), auto)",
          gridTemplateColumns: {
            sm: "1fr 1fr",
            lg: "2fr minmax(400px, 1fr)",
          },
          gap: 2,
          "& > :first-of-type": {
            gridColumn: { sm: "1 / -1", lg: "span 1" },
            gridRow: { lg: "span 2" },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
