import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import SvgIcon from "@mui/joy/SvgIcon";
import CardActions from "@mui/joy/CardActions";
import Button from "@mui/joy/Button";

export default function CardPricingPlan() {
  const checkIcon = (
    <SvgIcon sx={{ mt: "2px" }}>
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
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </SvgIcon>
  );
  return (
    <Card
      variant="soft"
      color="primary"
      invertedColors
      sx={{ borderRadius: "xl" }}
    >
      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
        <Typography level="h3" sx={{ flex: "auto" }}>
          PRO
        </Typography>
        <Chip variant="solid" size="sm" sx={{ borderRadius: "xs" }}>
          Save $40
        </Chip>
      </CardContent>
      <List sx={{ "& > li": { alignItems: "flex-start" } }}>
        <ListItem>
          <ListItemDecorator>{checkIcon}</ListItemDecorator>
          <ListItemContent>Upload Video with HD Resolution</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>{checkIcon}</ListItemDecorator>
          <ListItemContent>Attachment and Post Scheduling</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>{checkIcon}</ListItemDecorator>
          <ListItemContent>Set your rates</ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemDecorator>{checkIcon}</ListItemDecorator>
          <ListItemContent>Exclusive Deals</ListItemContent>
        </ListItem>
        <ListItem sx={(theme) => theme.variants.plainDisabled.primary}>
          <ListItemDecorator>
            <SvgIcon sx={{ mt: "2px" }}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </SvgIcon>
          </ListItemDecorator>
          <ListItemContent>Advanced Statistics</ListItemContent>
        </ListItem>
      </List>
      <CardContent>
        <Typography
          component="div"
          fontSize="xl2"
          fontWeight="xl"
          textColor="text.primary"
          endDecorator={
            <Typography fontSize="md" fontWeight="400">
              /month
            </Typography>
          }
          sx={{ alignItems: "baseline" }}
        >
          $123
        </Typography>
        <CardActions>
          <Button>Try 1 month</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
