import React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";

export default function CarouselAppleGames() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "nowrap",
        overflow: "auto",
        scrollSnapType: "x mandatory",
        "& > *": { scrollSnapAlign: "center", minWidth: 360 },
      }}
    >
      {[...new Array(5)].map((_, index) => (
        <Box key={index}>
          <Typography color="primary" level="body-xs">
            HAPPENING NOW
          </Typography>
          <Typography level="body-lg" lineHeight="xs">
            Pokémon GO
          </Typography>
          <Typography level="body-lg" lineHeight="xs" textColor="text.icon">
            Catch Froakie this Community Day
          </Typography>

          <Card
            variant="solid"
            color="neutral"
            invertedColors
            sx={{ minHeight: 260, mt: 1.5 }}
          >
            <CardCover>
              <img
                alt="Pokémon GO"
                src="https://gamepress.gg/pokemongo/sites/pokemongo/files/2023-08/Froakie_Community_Day.png"
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0 0 0 / 0.8), rgba(0 0 0 / 0.3) 100px, transparent 200px)",
              }}
            />
            <CardContent
              orientation="horizontal"
              sx={{ flex: "initial", mt: "auto", alignItems: "center" }}
            >
              <Avatar src="https://lh3.googleusercontent.com/Uzo_GQXZXc1Nsj7OY3dbfRDam0TjTzV4A1dhgSYLzkdrygVRDZgDMv7JME4kEAkS0UFa0MdJevzXynIlc7X6yXRSEV2-XkrRpX1QzJts9-a6=e365-s0" />
              <CardContent>
                <Typography level="title-md">Pokémon GO</Typography>
                <Typography level="body-xs">
                  Epic AR adventure & online RPG
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Button
                  size="sm"
                  variant="solid"
                  color="neutral"
                  sx={{
                    color: "#fff",
                    bgcolor: "rgba(255 255 255 / 0.4)",
                    backdropFilter: "blur(6px)",
                    borderRadius: 40,
                  }}
                >
                  GET
                </Button>
                <Typography fontSize="0.625rem">In-App Purchases</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
