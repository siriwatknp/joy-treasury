import React from "react";
import {
  AspectRatio,
  Avatar,
  Card,
  CardContent,
  CardOverflow,
  Chip,
  Stack,
  Typography,
} from "@mui/joy";

export default function CardBlogTechnology() {
  return (
    <Card
      variant="plain"
      sx={{
        boxShadow: "md",
        "--Card-padding": "24px",
        "--Card-radius": "16px",
        gap: "24px",
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="4/3">
          <img
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            srcSet="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Chip
          size="sm"
          sx={{
            "--Chip-paddingInline": "10px",
            "--Chip-minHeight": "0px",
            color: "#fff",
            bgcolor: "#4cb1ce",
            alignItems: "center",
            paddingY: "1px",
            fontSize: "10px",
            fontWeight: "lg",
          }}
        >
          TECHNOLOGY
        </Chip>
        <Typography level="title-md">
          Why is the Tesla Cybertruck designed the way it is?
        </Typography>
        <Typography level="body-sm">
          An exploration into the truck&apos;s polarising design.
        </Typography>
      </CardContent>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        marginTop="12px"
      >
        <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography level="title-md">Carrie Brewer</Typography>
          <Typography
            level="body-xs"
            sx={{ color: "#979aac", fontWeight: 400 }}
          >
            2 h ago
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
