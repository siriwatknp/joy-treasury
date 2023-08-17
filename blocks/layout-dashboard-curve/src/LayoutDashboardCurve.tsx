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
        minHeight: "100dvh",
        gridTemplateAreas: '"sidebar header" "sidebar main"',
        gridTemplateColumns:
          "clamp(0px, (100vw - var(--view-breakpoint)) * 999, var(--Sidebar-width)) 1fr",
        gridTemplateRows:
          "clamp(0px, (var(--view-breakpoint) - 100vw) * 999, var(--Header-height)) 1fr",
        transition: "grid-template-columns 0.2s",
        bgcolor: "neutral.800",
      }}
    >
      <GlobalStyles
        styles={{
          ":root": {
            "--Sidebar-width": "256px",
            "--Header-height": "56px",
            "--view-breakpoint": "900px",
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
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        component="nav"
        variant="solid"
        color="neutral"
        invertedColors
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
          height: "100dvh",
          width: "var(--Sidebar-width)",
          top: 0,
          p: 2,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          bgcolor: "neutral.800",
        }}
      >
        {children}
      </Sheet>
    </>
  );
}

export function Main({ children }: React.PropsWithChildren) {
  return (
    <Box
      component="main"
      sx={{
        minWidth: 0,
        gridArea: "main",
        bgcolor: "background.surface",
        borderTopLeftRadius:
          "clamp(0px, (100vw - var(--view-breakpoint)) * 999, 40px)",
        marginTop: "clamp(0px, (100vw - var(--view-breakpoint)) * 999, 12px)",
        transition: "border-radius 0.2s, margin-top 0.2s",
      }}
    >
      {children}
    </Box>
  );
}

export function Header() {
  return (
    <Sheet
      component="header"
      sx={{
        gridArea: "header",
        height: "var(--Header-height)",
        position: "sticky",
        top: 0,
        transform: { md: "translateY(-120%)" },
        transition: "transform 0.3s",
        px: { xs: 2, sm: 3 },
        display: "flex",
        gap: 1.5,
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
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

export default function LayoutDashboardCurve() {
  return (
    <Page>
      <Sidebar>Navigation goes here.</Sidebar>
      <Header />
      <Main>
        <Container sx={{ py: 3 }}>
          <Typography level="h1" sx={{ mb: 2 }}>
            Page
          </Typography>

          <Sheet
            variant="outlined"
            sx={{
              p: 3,
              borderRadius: "sm",
              boxShadow: "xs",
              minHeight: 300,
            }}
          >
            Page content goes here.
          </Sheet>
        </Container>
      </Main>
    </Page>
  );
}
