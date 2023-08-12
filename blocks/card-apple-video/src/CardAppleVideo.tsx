import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

export default function CardAppleVideo() {
  return (
    <Card sx={{ borderRadius: "xl", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio ratio="4/3" maxHeight={240}>
          <video
            autoPlay
            loop
            muted
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can
            <a href="https://archive.org/details/BigBuckBunny_124">
              download it
            </a>
            and watch it with your favorite video player!
          </video>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-sm" textColor="neutral.500">
          GET CREATIVE
        </Typography>
        <Typography
          level="h3"
          fontWeight="xl"
          lineHeight="xs"
          sx={{ textWrap: "balance" }}
        >
          Make videos with your family
        </Typography>
        <Typography level="body-sm">
          Record and remember good times with your loved ones.
        </Typography>
      </CardContent>
    </Card>
  );
}
