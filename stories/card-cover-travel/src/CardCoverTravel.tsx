import React from "react";
import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";
import CardActions from "@mui/joy/CardActions/CardActions";
import CardOverflow from "@mui/joy/CardOverflow/CardOverflow";
import SvgIcon from "@mui/joy/SvgIcon/SvgIcon";
import IconButton from "@mui/joy/IconButton/IconButton";

export default function CardCoverTravel() {
  return (
    <Card
      variant="solid"
      invertedColors
      size="lg"
      sx={{ minHeight: 240, boxShadow: "lg" }}
    >
      <CardCover>
        <img src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0) 200px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end", gap: 1 }}>
        <Chip
          size="sm"
          variant="soft"
          sx={{
            borderRadius: "sm",
            backdropFilter: "blur(4px)",
            fontWeight: "lg",
          }}
        >
          Travel
        </Chip>

        <Typography level="title-md">
          <Link
            textColor="inherit"
            underline="none"
            overlay
            href="#" // 👈 TODO: link to another page here.
            sx={{
              "--joy-palette-focusVisible": (theme) =>
                theme.vars.palette.primary[500],
            }}
          >
            5 Best Places to Travel in Thailand
          </Link>
        </Typography>
        <Typography
          level="body-xs"
          startDecorator={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </SvgIcon>
          }
        >
          Siriwat K.
        </Typography>
      </CardContent>
      <CardContent
        orientation="horizontal"
        sx={{
          position: "absolute",
          gap: 1,
          top: "0.5rem",
          right: "0.5rem",
          "& > button": {
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <IconButton size="sm">
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </SvgIcon>
        </IconButton>
        <IconButton size="sm">
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </CardContent>
    </Card>
  );
}
