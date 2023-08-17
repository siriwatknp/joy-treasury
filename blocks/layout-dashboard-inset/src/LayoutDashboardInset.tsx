import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import CssBaseline from "@mui/joy/CssBaseline";
import GlobalStyles from "@mui/joy/GlobalStyles";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

const openSidebar = () => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.setProperty("--SideNavigation-slideIn", "1");
  }
};

const closeSidebar = () => {
  if (typeof document !== "undefined") {
    document.documentElement.style.removeProperty("--SideNavigation-slideIn");
    document.body.style.removeProperty("overflow");
  }
};

const toggleSidebar = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--SideNavigation-slideIn");
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
};

export function Page({ children }: React.PropsWithChildren) {
  return (
    <Box
      sx={{
        display: "grid",
        height: "100dvh",
        gridTemplateAreas: '"header header" "sidebar main"',
        gridTemplateColumns:
          "clamp(0px, (100vw - var(--view-breakpoint)) * 999, var(--Sidebar-width)) 1fr",
        gridTemplateRows: "var(--Header-height) 1fr",
        transition: "grid-template-columns 0.2s",
        bgcolor: "var(--app-background)",
      }}
    >
      <GlobalStyles
        styles={{
          ":root": {
            "--Sidebar-width": "256px",
            "--Header-height": "56px",
            "--Main-inset": "12px",
            "--view-breakpoint": "900px",
            "--app-background": "var(--joy-palette-neutral-100)",
          },
        }}
      />
      <CssBaseline />
      {children}
    </Box>
  );
}

export function Sidebar({ children }: React.PropsWithChildren) {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          zIndex: (theme) => theme.vars.zIndex.modal,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "background.backdrop",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        component="nav"
        sx={{
          gridArea: "sidebar",
          position: {
            xs: "fixed",
            md: "sticky",
          },
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
            md: "none",
          },
          transition: "transform 0.2s",
          zIndex: (theme) => theme.vars.zIndex.modal,
          width: "var(--Sidebar-width)",
          height: "min(100%, 100dvh)",
          top: 0,
          p: 2,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          bgcolor: "var(--app-background)",
        }}
      >
        {children}
      </Sheet>
    </>
  );
}

export function Main({ children }: React.PropsWithChildren) {
  return (
    <Sheet
      variant="outlined"
      component="main"
      sx={{
        gridArea: "main",
        minWidth: 0,
        boxShadow: "sm",
        bgcolor: "background.surface",
        borderWidth: { xs: 0, md: 1 },
        borderRadius:
          "clamp(0px, (100vw - var(--view-breakpoint)) * 999, 24px)",
        margin:
          "clamp(0px, (100vw - var(--view-breakpoint)) * 999, var(--Main-inset))",
        transition: "border-radius 0.2s, margin 0.2s",
        overflow: "auto",
        height: "calc(100% - 2 * var(--Main-inset))",
      }}
    >
      {children}
    </Sheet>
  );
}

export function Header() {
  return (
    <Sheet
      component="header"
      sx={{
        gridArea: "header",
        position: "sticky",
        top: 0,
        px: 2,
        display: "flex",
        gap: 1.5,
        alignItems: "center",
        bgcolor: "var(--app-background)",
      }}
    >
      <IconButton
        size="sm"
        onClick={toggleSidebar}
        sx={{ display: { md: "none" } }}
      >
        <SvgIcon>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </SvgIcon>
      </IconButton>
      <Typography level="title-md">Global Header</Typography>
    </Sheet>
  );
}

export default function LayoutDashboardInset() {
  return (
    <Page>
      <Sidebar>Navigation goes here.</Sidebar>
      <Header />
      <Main>
        <Container sx={{ py: 3 }}>
          <Typography level="h1" sx={{ mb: 2 }}>
            Page
          </Typography>

          <Typography level="body-lg">Page content goes here.</Typography>
        </Container>
      </Main>
    </Page>
  );
}
