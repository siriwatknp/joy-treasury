import React from "react";
import Avatar, { avatarClasses } from "@mui/joy/Avatar";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function CardAppleEssentials() {
  return (
    <Card sx={{ borderRadius: "xl", boxShadow: "xl" }}>
      <div>
        <Typography level="title-sm" textColor="text.icon">
          ESSENTIALS
        </Typography>
        <Typography level="h3">Social networking 101</Typography>
      </div>
      <CardContent>
        <List
          sx={{
            "--ListItem-paddingX": "0px",
            "--ListItemDecorator-size": "64px",
            [`& .${avatarClasses.root}`]: {
              borderRadius: "md",
              boxShadow: "inset 0 0 0 1px var(--joy-palette-divider)",
            },
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Avatar
                variant="plain"
                size="lg"
                src="https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png"
              />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">Reddit</Typography>
              <Typography level="body-sm">
                Trending Topics & Top News
              </Typography>
            </ListItemContent>
            <Button
              size="sm"
              variant="soft"
              color="neutral"
              sx={{ borderRadius: "xl", color: "primary.500" }}
            >
              OPEN
            </Button>
          </ListItem>
          <ListDivider inset="startContent" />
          <ListItem>
            <ListItemDecorator>
              <Avatar
                variant="plain"
                size="lg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
              />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">
                LinkedIn: Job Search & News
              </Typography>
              <Typography level="body-sm">Network & Find Jobs F...</Typography>
            </ListItemContent>
            <Button
              size="sm"
              variant="soft"
              color="neutral"
              sx={{ borderRadius: "xl", color: "primary.500" }}
            >
              UPDATE
            </Button>
          </ListItem>
          <ListDivider inset="startContent" />
          <ListItem>
            <ListItemDecorator>
              <Avatar
                variant="plain"
                size="lg"
                src="https://www.motiongraphicplus.com/wp-content/uploads/2021/02/Clubhouse-logo.png"
              />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">Clubhouse</Typography>
              <Typography level="body-sm">Talk, listen, hand out</Typography>
            </ListItemContent>
            <Button
              size="sm"
              variant="plain"
              color="neutral"
              sx={{ borderRadius: "xl", color: "primary.500" }}
            >
              <SvgIcon fontSize="xl3" sx={{ color: "inherit" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </SvgIcon>
            </Button>
          </ListItem>
          <ListDivider inset="startContent" />
          <ListItem>
            <ListItemDecorator>
              <Avatar
                variant="plain"
                size="lg"
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg"
              />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-md">X</Typography>
              <Typography level="body-sm">Blaze your glory!</Typography>
            </ListItemContent>
            <Button
              size="sm"
              variant="soft"
              color="neutral"
              sx={{ borderRadius: "xl", color: "primary.500" }}
            >
              UPDATE
            </Button>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
