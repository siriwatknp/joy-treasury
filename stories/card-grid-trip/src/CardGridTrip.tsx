import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import SvgIcon from "@mui/joy/SvgIcon";

export default function CardGridTrip() {
  return (
    <Card
      variant="solid"
      invertedColors
      sx={{ minHeight: 200, borderRadius: "xl", boxShadow: "md" }}
    >
      <CardCover>
        <img
          src="https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
          alt="Iceland"
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0) 160px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end", gap: 0.5 }}>
        <SvgIcon fontSize="xl3">
          <svg
            width="512"
            height="512"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963l-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882l-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646l-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8L3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237l-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646l-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963l.496-1.85a.5.5 0 1 1 .966.26l-.236.882l1.12-.646a.5.5 0 0 1 .5.866l-1.12.646l.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963l1.849-.495a.5.5 0 0 1 .259.966l-.883.237l1.12.646a.5.5 0 0 1-.5.866l-1.12-.646l.236.883a.5.5 0 1 1-.966.258l-.495-1.849l-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"
            />
          </svg>
        </SvgIcon>
        <Typography level="h2">
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
            Iceland
          </Link>
        </Typography>
        <Typography level="body-sm">Winter 2020 • 8 days</Typography>
      </CardContent>
    </Card>
  );
}
