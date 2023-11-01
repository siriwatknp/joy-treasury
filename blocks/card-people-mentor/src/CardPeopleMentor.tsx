import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";

export default function CardPeopleMentor() {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "xl", overflow: "hidden", boxShadow: "xs", backgroundColor: "background.body" }}
    >
      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
        <Avatar
          alt="Shawn Carter"
          src="https://mui.com/static/images/avatar/1.jpg"
          size="lg" />
        <Box>
          <Typography level="title-md" noWrap>
            Richard Wyatt
          </Typography>
          <Typography level="body-sm" textColor="neutral.400" noWrap>
            Director, Producer
          </Typography>
        </Box>
        <Box sx={{
          borderRadius: "lg",
          marginLeft: "auto", 
          padding: "6px 16px", 
          backgroundColor: "#FE943C", 
          boxShadow: "0px 6px 16px 0px rgba(255, 163, 88, 0.606);"
        }}>
          <Typography level="body-md" fontWeight="lg" sx={{ color: "common.white" }}>
            MENTOR
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
