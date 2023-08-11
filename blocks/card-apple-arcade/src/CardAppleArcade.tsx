import React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function CardAppleArcade() {
  return (
    <Card sx={{ minHeight: 425, borderRadius: "xl" }}>
      <CardCover>
        <img
          alt=""
          src="https://teaser-trailer.com/wp-content/uploads/Angry-Birds-Movie-New-character-poster-1.jpg"
        />
      </CardCover>
      <CardContent
        sx={{
          m: -1,
          p: 1,
          backdropFilter: "blur(20px)",
          borderRadius: "md",
          flex: "initial",
          mb: "auto",
          width: "max-content",
        }}
      >
        <Typography level="title-sm" textColor="rgba(255 255 255 / 0.72)">
          APPLE ARCADE
        </Typography>
        <Typography level="h3" textColor="#fff">
          Angry Birds soars again!
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.surface" }}>
        <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
          <Avatar
            src="https://i.pinimg.com/originals/c7/e2/5c/c7e25c9979b38201ee2b1729b2f3c151.png"
            sx={{ borderRadius: "md" }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography level="body-xs">Apple Arcade</Typography>
            <Typography level="title-md">Angry Birds Reloaded</Typography>
            <Typography level="body-xs">Classic Slingshot Action!</Typography>
          </Box>
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            sx={{
              color: "primary.plainColor",
              borderRadius: "xl",
              minWidth: 80,
            }}
          >
            GET
          </Button>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
