import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

export default function CardNewsPlane() {
  return (
    <Card sx={{ borderRadius: "xl", boxShadow: "none" }}>
      <CardOverflow>
        <AspectRatio
          sx={{
            borderBottomLeftRadius: "var(--Card-radius)",
            borderBottomRightRadius: "var(--Card-radius)",
          }}
        >
          <img src="https://images.unsplash.com/photo-1619941400844-ec5ef7495cb8?fm=jpg&fit=crop&w=1080&q=80&fit=max" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h4" component="h2">
          <Link href="#" overlay underline="none" textColor="inherit">
            Supersonic Airline Test Flight Success!
          </Link>
        </Typography>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
        <Avatar src="https://i.pravatar.cc/300" />
        <Typography level="body-sm" textColor="text.tertiary">
          John Smith
        </Typography>
        <Typography
          level="body-sm"
          textColor="text.tertiary"
          sx={{ ml: "auto" }}
        >
          10 Jan 2020
        </Typography>
      </CardContent>
    </Card>
  );
}
