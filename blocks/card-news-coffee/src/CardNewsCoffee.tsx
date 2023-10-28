import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

export default function CardNewsCoffee() {
  return <Card>
    <AspectRatio
      sx={{
        borderBottomLeftRadius: "var(--Card-radius)",
        borderBottomRightRadius: "var(--Card-radius)",
      }}
    >
      <img src="https://images.squarespace-cdn.com/content/v1/574ca6dac2ea517f706dfb89/e3978b8b-a830-4510-bc80-7132f933b270/xviiizz-3b_tjW24pDk-unsplash.jpg?format=1500w" />
    </AspectRatio>
    <CardContent>
      <Typography level="h4" component="h2">
        <Link href="#" overlay underline="none" textColor="inherit">
          How to make perfect morning coffee, according to the Science
        </Link>
      </Typography>
    </CardContent>
    <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
      <Avatar src="https://i.pravatar.cc/300?img=1" />
      <Box>
        <Typography fontWeight="lg">
          Tara Gibson
        </Typography>
        <Typography level="body-sm" textColor="text.tertiary">
          Jul 13, 2019
        </Typography>
      </Box>
    </CardContent>
  </Card>
}