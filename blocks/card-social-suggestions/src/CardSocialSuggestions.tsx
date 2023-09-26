import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";

export default function CardSocialSuggestions() {
  return (
    <Card sx={{ borderRadius: "xl" }}>
      <CardContent>
        <div>
          <Typography level="title-md" textColor="text.icon">
            Suggestions
          </Typography>
        </div>
        <List
          sx={{
            "--ListItem-paddingX": "0px",
            "--ListItemDecorator-size": "64px",
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Avatar
                variant="plain"
                size="lg"
                src="https://api.dicebear.com/7.x/micah/svg?seed=Rascal&backgroundColor=ffdfbf"
              />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">Jennifer Lawrence</Typography>
              <Typography
                level="body-sm"
                color="success"
                startDecorator={
                  <AspectRatio
                    variant="plain"
                    ratio="1"
                    sx={{
                      width: 6,
                      borderRadius: "50%",
                      bgcolor: "success.400",
                    }}
                  />
                }
              >
                Online
              </Typography>
            </ListItemContent>
          </ListItem>
          <ListDivider inset="startContent" />
          <ListItem>
            <ListItemDecorator>
              <Avatar
                variant="plain"
                size="lg"
                src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Tinkerbell&backgroundColor=d1d4f9"
              />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">Nicolas Cage</Typography>
              <Typography level="body-sm" textColor="text.tertiary">
                Last seen just now
              </Typography>
            </ListItemContent>
          </ListItem>
          <ListDivider inset="startContent" />
          <ListItem>
            <ListItemDecorator>
              <Avatar
                variant="plain"
                size="lg"
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Leo&backgroundColor=b6e3f4"
              />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">Amy Adams</Typography>
              <Typography level="body-sm" textColor="text.tertiary">
                Last seen 5 min ago
              </Typography>
            </ListItemContent>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
