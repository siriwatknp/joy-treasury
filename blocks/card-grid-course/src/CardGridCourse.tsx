import React from 'react'
import type { FC, ReactNode } from "react";
import { Link, SvgIcon } from "@mui/joy";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

export const COLORS = {
  white: "#FFF",
  vodka: "#B6B9EE",
  iris: "#434BD2",
  coolGrey: "#8D8EAD",
} satisfies Record<string, `#${string}`>;

export type CardGridCourseProps = {
  icon: ReactNode;
  title: string;
  description: string;
  url: string;
};

const TRANSITION_ALL = "all .25s ease-out";

const CardGridCourse: FC<CardGridCourseProps> = ({
  icon,
  title,
  description,
  url = "#",
}) => {
  return (
    <Card
      variant="solid"
      sx={{
        transition: TRANSITION_ALL,
        bgcolor: COLORS.white,
        "&:focus-within": {
          transform: "scale(1.05)",
        },
        ":hover": {
          bgcolor: COLORS.iris,

          ".card--title > a, .card--icon-arrow": {
            color: COLORS.white,
          },

          ".card--description": {
            color: COLORS.vodka,
          },
        },
      }}
    >
      {icon}
      {/* <icon className="card--icon" sx={{ color: COLORS.iris }} /> */}
      <Typography // <span>
        className="card--title"
        level="h3"
        sx={{ color: COLORS.iris }}
      >
        <Link // <a>
          overlay
          href={url}
          sx={{
            color: COLORS.iris,
            ":hover": { textDecoration: "none" },
          }}
        >
          {title}
        </Link>
      </Typography>
      <Typography
        className="card--description"
        level="body-sm"
        sx={{
          color: COLORS.coolGrey,
          "-webkit-hyphen": "auto",
        }}
      >
        {description}
      </Typography>

      <SvgIcon
        className="card--icon-arrow"
        sx={{ color: COLORS.iris, ml: "auto" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </SvgIcon>
    </Card>
  );
};

export default CardGridCourse;
