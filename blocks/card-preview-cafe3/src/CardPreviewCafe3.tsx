import * as React from "react";
import { useState } from 'react';
import Box from "@mui/joy/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import IconButton from "@mui/joy/IconButton";
import { TypographyNestedContext } from "@mui/joy/Typography/Typography";

export default function CardPreviewCafe3() {

  const [isClicked, setIsClicked] = useState(false);

  const colorStyle = {color:"red", fill: "color"}

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Card sx={{ width: 170 }}>
      <CardOverflow>
        <AspectRatio
        maxHeight={170}
        ratio="1">
          <img
            src="https://images.squarespace-cdn.com/content/v1/574ca6dac2ea517f706dfb89/e3978b8b-a830-4510-bc80-7132f933b270/xviiizz-3b_tjW24pDk-unsplash.jpg?format=1500w"
            srcSet="https://images.squarespace-cdn.com/content/v1/574ca6dac2ea517f706dfb89/e3978b8b-a830-4510-bc80-7132f933b270/xviiizz-3b_tjW24pDk-unsplash.jpg?format=1500w"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-sm">Cerita Bangao Cafee</Typography>
        <Typography level="body-xs">Coffee, Western, Local</Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          alignItems: "center"
        }}
      >
        <SvgIcon
          sx={{
            color: "#ebb215"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </SvgIcon>
        <Typography>
          <b>4.8</b>
        </Typography>
        <IconButton size="sm" sx={{ marginLeft: "auto" }}>
          <SvgIcon onClick={handleClick} sx={{color: isClicked ? "red" : "none", fill: isClicked ? "red" : "none"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </SvgIcon>
        </IconButton>
      </Box>
    </Card>
  );
}
