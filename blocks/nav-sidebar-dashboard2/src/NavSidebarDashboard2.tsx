import React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListSubheader from "@mui/joy/ListSubheader";
import Sheet from "@mui/joy/Sheet";
import SvgIcon from "@mui/joy/SvgIcon";

export default function NavSidebarDashboard2() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(false);
  return (
    <Sheet component="nav">
      <List
        sx={{
          gap: 2,
          "--ListItem-paddingLeft": "1rem",
          "& .Mui-selected": {
            "&::before": {
              content: '""',
              height: "60%",
              display: "block",
              position: "absolute",
              left: 0,
              top: "20%",
              width: 4,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              bgcolor: "primary.solidBg",
            },
          },
        }}
      >
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <SvgIcon>
                <svg
                  width="512"
                  height="512"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M240 128a8 8 0 0 1-8 8h-27.06l-37.78 75.58A8 8 0 0 1 160 216h-.4a8 8 0 0 1-7.08-5.14L95.35 60.76l-32.07 70.55A8 8 0 0 1 56 136H24a8 8 0 0 1 0-16h26.85l37.87-83.31a8 8 0 0 1 14.76.46l57.51 151l31.85-63.71A8 8 0 0 1 200 120h32a8 8 0 0 1 8 8Z"
                  />
                </svg>
              </SvgIcon>
            </ListItemDecorator>
            Updates
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListSubheader sx={{ fontWeight: "lg" }}>
            Product development
            <IconButton
              size="sm"
              onClick={() => setOpen1(!open1)}
              sx={{ ml: "auto" }}
            >
              <SvgIcon>
                <svg
                  width="512"
                  height="512"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"
                  />
                </svg>
              </SvgIcon>
            </IconButton>
          </ListSubheader>

          <Box
            sx={{
              display: "grid",
              gridTemplateRows: open1 ? "1fr" : "0fr",
              transition: "0.2s ease",
            }}
          >
            <List sx={{ overflow: "hidden" }}>
              <ListItem>
                <ListItemButton component="a" href="#">
                  <ListItemDecorator>
                    <SvgIcon>
                      <svg
                        width="512"
                        height="512"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M10.505 3.117a1 1 0 0 0-1.011 0l-6.01 3.52a1 1 0 0 0 .003 1.726l6.009 3.502a1 1 0 0 0 1.007 0l6.009-3.502a1 1 0 0 0 .001-1.727l-6.009-3.52ZM9.494 4.276a1 1 0 0 1 1.01 0l5.504 3.223l-5.505 3.209a1 1 0 0 1-1.007 0L3.99 7.499l5.504-3.223ZM3.07 9.65l6.438 3.623a1 1 0 0 0 .98 0l6.438-3.623a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Zm0 2.453l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Z"
                        />
                      </svg>
                    </SvgIcon>
                  </ListItemDecorator>
                  Views
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton selected color="primary" component="a" href="#">
                  <ListItemDecorator>
                    <SvgIcon>
                      <svg
                        width="512"
                        height="512"
                        viewBox="0 0 2048 2048"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"
                        />
                      </svg>
                    </SvgIcon>
                  </ListItemDecorator>
                  Products
                </ListItemButton>
              </ListItem>

              <ListItem nested>
                <ListItem>
                  <ListItemDecorator>
                    <SvgIcon>
                      <svg
                        width="512"
                        height="512"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          d="m5.212 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0Zm6.364 6.364l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0Zm0-12.727L8.889 6.06a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0Zm6.364 6.363l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"
                        />
                      </svg>
                    </SvgIcon>
                  </ListItemDecorator>
                  Components
                  <IconButton
                    size="sm"
                    onClick={() => setOpen2(!open2)}
                    sx={{ ml: "auto" }}
                  >
                    <SvgIcon>
                      <svg
                        width="512"
                        height="512"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                </ListItem>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateRows: open2 ? "1fr" : "0fr",
                    transition: "0.2s ease",
                  }}
                >
                  <List
                    sx={{
                      fontSize: "sm",
                      overflow: "hidden",
                    }}
                  >
                    <ListItem>
                      <ListItemButton component="a" href="#">
                        <ListItemDecorator />
                        Fabrics
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="#">
                        <ListItemDecorator />
                        Labels
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="#">
                        <ListItemDecorator />
                        Trims
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="#">
                        <ListItemDecorator />
                        Packaging
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </ListItem>

              <ListItem nested>
                <ListItem>
                  <ListItemDecorator>
                    <SvgIcon>
                      <svg
                        width="512"
                        height="512"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"
                        />
                      </svg>
                    </SvgIcon>
                  </ListItemDecorator>
                  Libraries
                  <IconButton
                    size="sm"
                    onClick={() => setOpen3(!open3)}
                    sx={{ ml: "auto" }}
                  >
                    <SvgIcon>
                      <svg
                        width="512"
                        height="512"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"
                        />
                      </svg>
                    </SvgIcon>
                  </IconButton>
                </ListItem>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateRows: open3 ? "1fr" : "0fr",
                    transition: "0.2s ease",
                  }}
                >
                  <List sx={{ fontSize: "sm", overflow: "hidden" }}>
                    <ListItem>
                      <ListItemButton component="a" href="#">
                        <ListItemDecorator />
                        Sizes
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="#">
                        <ListItemDecorator />
                        Dimensions
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton component="a" href="#">
                        <ListItemDecorator />
                        Colors
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </ListItem>
            </List>
          </Box>
        </ListItem>
      </List>
    </Sheet>
  );
}
