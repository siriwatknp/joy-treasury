import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Dropdown from "@mui/joy/Dropdown";
import Link from "@mui/joy/Link";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Sheet from "@mui/joy/Sheet";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function NavHeadDropdown() {
  const [open, setOpen] = React.useState(false);
  const inRef = React.useRef(open);

  const handleEnter = () => {
    inRef.current = true;
    setOpen(true);
  };
  const handleLeave = () => {
    inRef.current = false;
    setTimeout(() => {
      if (!inRef.current) {
        setOpen(false);
      }
    }, 200);
  };

  return (
    <Sheet sx={{ boxShadow: "sm", p: 2 }}>
      <nav>
        <List
          orientation="horizontal"
          sx={{
            gap: 2,
            '& a, & [role="button"]': {
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
            <Dropdown
              open={open}
              onOpenChange={(event, newValue) => setOpen(newValue)}
            >
              <MenuButton
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                slots={{ root: ListItemButton }}
                sx={{ gap: 1 }}
              >
                Products
                <SvgIcon>
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </SvgIcon>
              </MenuButton>
              <Menu
                placement="bottom-start"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                sx={{ width: 300 }}
              >
                <MenuItem sx={{ gap: 2 }}>
                  <AspectRatio
                    ratio="1"
                    sx={{ borderRadius: "50%", minWidth: 40 }}
                  >
                    <div>
                      <SvgIcon>
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
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </SvgIcon>
                    </div>
                  </AspectRatio>
                  <ListItemContent>
                    <Typography level="title-md">Locky</Typography>
                    <Typography level="body-sm">
                      Lock you app at anytime.
                    </Typography>
                  </ListItemContent>
                </MenuItem>
                <MenuItem sx={{ gap: 2 }}>
                  <AspectRatio
                    ratio="1"
                    sx={{ borderRadius: "50%", minWidth: 40 }}
                  >
                    <div>
                      <SvgIcon>
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
                            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                          />
                        </svg>
                      </SvgIcon>
                    </div>
                  </AspectRatio>
                  <ListItemContent>
                    <Typography level="title-md">Experimento</Typography>
                    <Typography level="body-sm">
                      Safe environment for your next application.
                    </Typography>
                  </ListItemContent>
                </MenuItem>
              </Menu>
            </Dropdown>
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
