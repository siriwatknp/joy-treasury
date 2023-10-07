import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip, { chipClasses } from "@mui/joy/Chip";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import ListSubheader from "@mui/joy/ListSubheader";
import SvgIcon from "@mui/joy/SvgIcon";
import { Command } from "cmdk";

export default function CmdkJoyDefault() {
  return (
    <Card
      component={Command}
      label="Command Menu"
      size="sm"
      sx={{ minWidth: 640, borderRadius: "lg", boxShadow: "lg", gap: 0 }}
    >
      <CardContent orientation="horizontal">
        <Chip size="sm">Joy UI</Chip>
        <Chip size="sm">CMDK</Chip>
      </CardContent>
      <Input
        variant="plain"
        placeholder="What do you need?"
        slotProps={{ input: { component: Command.Input } }}
        sx={{
          "--Input-focusedThickness": 0,
          borderRadius: 0,
          borderBottom: "1px solid",
          borderColor: "divider",
          py: 2,
          px: 1,
        }}
      />
      <List
        size="sm"
        component={Command.List}
        sx={(theme) => ({
          mx: "calc(var(--Card-padding) * -1)",
          px: "var(--Card-padding)",
          borderRadius: "lg",
          height: "min(300px, var(--cmdk-list-height))",
          transition: "0.1s ease",
          overflow: "auto",
          "--List-gap": "4px",
          "--ListItem-radius": "8px",
          "--ListItem-minHeight": "44px",
          '[aria-selected="true"]': theme.variants.plainHover.neutral,
          "[hidden]": {
            display: "none",
          },
          '[role="option"]': {
            gap: 1,
          },
          [`& .${chipClasses.root}`]: {
            borderRadius: "sm",
            bgcolor: "background.level2",
          },
        })}
      >
        <ListItem component={Command.Empty} sx={{ justifyContent: "center" }}>
          No results found.
        </ListItem>

        <ListItem
          nested
          component={Command.Group}
          heading={<ListSubheader>Projects</ListSubheader>}
        >
          <ListItemButton component={Command.Item}>
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </SvgIcon>
            <ListItemContent>Search Projects...</ListItemContent>
            <Chip size="sm" component="kbd">
              S
            </Chip>
            <Chip size="sm" component="kbd">
              P
            </Chip>
          </ListItemButton>
          <ListItemButton component={Command.Item}>
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </SvgIcon>
            <ListItemContent>Create New Project...</ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem
          nested
          component={Command.Group}
          heading={<ListSubheader>Teams</ListSubheader>}
        >
          <ListItemButton component={Command.Item}>
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </SvgIcon>
            <ListItemContent>Search Teams...</ListItemContent>
            <Chip size="sm" component="kbd">
              ⇧
            </Chip>
            <Chip size="sm" component="kbd">
              S
            </Chip>
          </ListItemButton>
          <ListItemButton component={Command.Item}>
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </SvgIcon>
            <ListItemContent>Create New Team...</ListItemContent>
          </ListItemButton>
        </ListItem>

        <ListItem
          nested
          component={Command.Group}
          heading={<ListSubheader>Help</ListSubheader>}
        >
          <ListItemButton component={Command.Item}>
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="m9 18-1.5-1.5" />
              </svg>
            </SvgIcon>
            <ListItemContent>Search Docs...</ListItemContent>
            <Chip size="sm" component="kbd">
              ⇧
            </Chip>
            <Chip size="sm" component="kbd">
              S
            </Chip>
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
}
