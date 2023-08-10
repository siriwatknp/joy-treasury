import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";

export default function CardGridSimple() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: 3,
        width: "80vw",
      }}
    >
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{ gridColumn: "span 3" }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ minWidth: 140 }}>
            <img src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <div>
            <b>Typography</b> is the art and technique of arranging type to make
            written language legible, readable and appealing when displayed.
          </div>
        </CardContent>
      </Card>

      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{ gridColumn: "span 3" }}
      >
        <CardContent>
          <div>
            <b>Typography</b> is the art and technique of arranging type to make
            written language legible, readable and appealing when displayed.
          </div>
        </CardContent>
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ minWidth: 140 }}>
            <img src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" />
          </AspectRatio>
        </CardOverflow>
      </Card>

      <Card variant="outlined" sx={{ gridColumn: "span 2" }}>
        <CardContent>
          <div>
            <b>Typography</b> is the art and technique of arranging type to make
            written language legible, readable and appealing when displayed.
          </div>
        </CardContent>
        <CardOverflow>
          <AspectRatio>
            <img src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" />
          </AspectRatio>
        </CardOverflow>
      </Card>

      <Card variant="outlined" sx={{ gridColumn: "span 2" }}>
        <CardOverflow>
          <AspectRatio>
            <img src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <div>
            <b>Typography</b> is the art and technique of arranging type to make
            written language legible, readable and appealing when displayed.
          </div>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ gridColumn: "span 2" }}>
        <CardContent>
          <b>Typography</b>
        </CardContent>
        <CardOverflow>
          <AspectRatio>
            <img src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <div>
            is the art and technique of arranging type to make written language
            legible, readable and appealing when displayed.
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
