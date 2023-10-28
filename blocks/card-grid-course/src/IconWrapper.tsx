import React from "react";
import type { FC, ReactNode } from "react";
import { Box } from "@mui/joy";
import { COLORS } from "./CardGridCourse";

type IconWrapperProps = {
  className?: string;
  children: ReactNode;
  bgColor: string;
};

const IconWrapper: FC<IconWrapperProps> = ({
  className = "",
  children,
  bgColor = "transparent",
}) => {
  return (
    <Box
      className={`icon--wrapper ${className}`}
      sx={{
        p: 1,
        borderRadius: '0.25rem',
        bgcolor: bgColor,
        width: '2.5rem',
        height: '2.5rem',
      }}
    >
      {children}
    </Box>
  );
};

IconWrapper.displayName = "IconWrapper";
export default IconWrapper;
