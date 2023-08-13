import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

export default function LayoutCarouselSnap({
  sx,
  enableScrollbar = false,
  ...props
}: BoxProps & { enableScrollbar?: boolean }) {
  return (
    <Box
      {...props}
      sx={[
        {
          minWidth: 0,
          display: "flex",
          flexWrap: "nowrap",
          mx: -2,
          // the padding is for children with shadow
          px: 2,
          pt: 2,
          pb: 3,
          gap: { xs: 2, md: 3 },
          overflow: "auto",
          scrollSnapType: "x mandatory",
          "& > *": { scrollSnapAlign: "center", flex: "none" },
          ...(!enableScrollbar && {
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
