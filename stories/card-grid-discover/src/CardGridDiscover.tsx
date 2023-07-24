import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

const CardDiscover = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <Card variant="solid" invertedColors sx={{ minHeight: 120 }}>
    <CardCover>
      <img src={image} alt="Playing a game" />
    </CardCover>
    <CardCover
      sx={{ background: "rgba(0 0 0 / 0.5)", backdropFilter: "blur(2px)" }}
    />
    <CardContent sx={{ alignItems: "center", justifyContent: "center" }}>
      <Typography level="h2">
        <Link
          underline="none"
          textColor="inherit"
          overlay
          href="#" // 👈 TODO: link to another page here.
          sx={{
            "--joy-palette-focusVisible": (theme) =>
              theme.vars.palette.primary[500],
          }}
        >
          {title}
        </Link>
      </Typography>
      <Typography level="body-sm">{description}</Typography>
    </CardContent>
  </Card>
);

export default function CardGridDiscover() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 2,
      }}
    >
      <CardDiscover
        image="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        title="Gaming"
        description="Gamer's paradise"
      />
      <CardDiscover
        image="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
        title="Music"
        description="Feel good"
      />
    </Box>
  );
}
