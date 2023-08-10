import React from "react";
import Link from "@mui/joy/Link";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Sheet from "@mui/joy/Sheet";

export default function NavHeadSimple() {
  return (
    <Sheet sx={{ boxShadow: "sm", p: 2 }}>
      <nav>
        <List
          orientation="horizontal"
          sx={{
            gap: 2,
            "& a": {
              borderRadius: 40,
              textDecorationColor: (theme) => theme.vars.palette.divider,
            },
          }}
        >
          <ListItem>
            <ListItemButton component={Link} href="#">
              Home
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} href="#">
              Products
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} href="#">
              About us
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} href="#">
              Contacts
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Sheet>
  );
}
