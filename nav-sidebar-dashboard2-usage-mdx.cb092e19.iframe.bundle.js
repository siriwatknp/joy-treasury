"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[9494],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/nav-sidebar-dashboard2/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const NavSidebarDashboard2raw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport IconButton from "@mui/joy/IconButton";\nimport List from "@mui/joy/List";\nimport ListItem from "@mui/joy/ListItem";\nimport ListItemButton from "@mui/joy/ListItemButton";\nimport ListItemDecorator from "@mui/joy/ListItemDecorator";\nimport ListSubheader from "@mui/joy/ListSubheader";\nimport Sheet from "@mui/joy/Sheet";\nimport SvgIcon from "@mui/joy/SvgIcon";\n\nexport default function NavSidebarDashboard2() {\n  const [open1, setOpen1] = React.useState(true);\n  const [open2, setOpen2] = React.useState(true);\n  const [open3, setOpen3] = React.useState(false);\n  return (\n    <Sheet component="nav">\n      <List\n        sx={{\n          gap: 2,\n          "--ListItem-paddingLeft": "1rem",\n          "& .Mui-selected": {\n            "&::before": {\n              content: \'""\',\n              height: "60%",\n              display: "block",\n              position: "absolute",\n              left: -1,\n              top: "20%",\n              width: 4,\n              borderTopRightRadius: 4,\n              borderBottomRightRadius: 4,\n              bgcolor: "primary.solidBg",\n            },\n          },\n        }}\n      >\n        <ListItem>\n          <ListItemButton>\n            <ListItemDecorator>\n              <SvgIcon>\n                <svg\n                  width="512"\n                  height="512"\n                  viewBox="0 0 256 256"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    fill="currentColor"\n                    d="M240 128a8 8 0 0 1-8 8h-27.06l-37.78 75.58A8 8 0 0 1 160 216h-.4a8 8 0 0 1-7.08-5.14L95.35 60.76l-32.07 70.55A8 8 0 0 1 56 136H24a8 8 0 0 1 0-16h26.85l37.87-83.31a8 8 0 0 1 14.76.46l57.51 151l31.85-63.71A8 8 0 0 1 200 120h32a8 8 0 0 1 8 8Z"\n                  />\n                </svg>\n              </SvgIcon>\n            </ListItemDecorator>\n            Updates\n          </ListItemButton>\n        </ListItem>\n        <ListItem nested>\n          <ListSubheader sx={{ fontWeight: "lg" }}>\n            Product development\n            <IconButton\n              size="sm"\n              onClick={() => setOpen1(!open1)}\n              sx={{ ml: "auto" }}\n            >\n              <SvgIcon>\n                <svg\n                  width="512"\n                  height="512"\n                  viewBox="0 0 24 24"\n                  xmlns="http://www.w3.org/2000/svg"\n                >\n                  <path\n                    fill="currentColor"\n                    d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"\n                  />\n                </svg>\n              </SvgIcon>\n            </IconButton>\n          </ListSubheader>\n\n          <Box\n            sx={{\n              display: "grid",\n              gridTemplateRows: open1 ? "1fr" : "0fr",\n              transition: "0.2s ease",\n            }}\n          >\n            <List sx={{ overflow: "hidden" }}>\n              <ListItem>\n                <ListItemButton component="a" href="#">\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 20 20"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M10.505 3.117a1 1 0 0 0-1.011 0l-6.01 3.52a1 1 0 0 0 .003 1.726l6.009 3.502a1 1 0 0 0 1.007 0l6.009-3.502a1 1 0 0 0 .001-1.727l-6.009-3.52ZM9.494 4.276a1 1 0 0 1 1.01 0l5.504 3.223l-5.505 3.209a1 1 0 0 1-1.007 0L3.99 7.499l5.504-3.223ZM3.07 9.65l6.438 3.623a1 1 0 0 0 .98 0l6.438-3.623a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Zm0 2.453l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Views\n                </ListItemButton>\n              </ListItem>\n\n              <ListItem>\n                <ListItemButton selected color="primary" component="a" href="#">\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 2048 2048"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="m1344 2l704 352v785l-128-64V497l-512 256v258l-128 64V753L768 497v227l-128-64V354L1344 2zm0 640l177-89l-463-265l-211 106l497 248zm315-157l182-91l-497-249l-149 75l464 265zm-507 654l-128 64v-1l-384 192v455l384-193v144l-448 224L0 1735v-676l576-288l576 288v80zm-640 710v-455l-384-192v454l384 193zm64-566l369-184l-369-185l-369 185l369 184zm576-1l448-224l448 224v527l-448 224l-448-224v-527zm384 576v-305l-256-128v305l256 128zm384-128v-305l-256 128v305l256-128zm-320-288l241-121l-241-120l-241 120l241 121z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Products\n                </ListItemButton>\n              </ListItem>\n\n              <ListItem nested>\n                <ListItem>\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 24 24"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="none"\n                          stroke="currentColor"\n                          stroke-width="1.5"\n                          d="m5.212 15.111l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848L6.06 15.111a.6.6 0 0 1-.848 0Zm6.364 6.364l-2.687-2.687a.6.6 0 0 1 0-.849l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .849l-2.687 2.687a.6.6 0 0 1-.848 0Zm0-12.727L8.889 6.06a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.688a.6.6 0 0 1-.848 0Zm6.364 6.363l-2.687-2.687a.6.6 0 0 1 0-.848l2.687-2.687a.6.6 0 0 1 .848 0l2.687 2.687a.6.6 0 0 1 0 .848l-2.687 2.687a.6.6 0 0 1-.848 0Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Components\n                  <IconButton\n                    size="sm"\n                    onClick={() => setOpen2(!open2)}\n                    sx={{ ml: "auto" }}\n                  >\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 24 24"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </IconButton>\n                </ListItem>\n\n                <Box\n                  sx={{\n                    display: "grid",\n                    gridTemplateRows: open2 ? "1fr" : "0fr",\n                    transition: "0.2s ease",\n                  }}\n                >\n                  <List\n                    sx={{\n                      fontSize: "sm",\n                      overflow: "hidden",\n                    }}\n                  >\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Fabrics\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Labels\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Trims\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Packaging\n                      </ListItemButton>\n                    </ListItem>\n                  </List>\n                </Box>\n              </ListItem>\n\n              <ListItem nested>\n                <ListItem>\n                  <ListItemDecorator>\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 1024 1024"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </ListItemDecorator>\n                  Libraries\n                  <IconButton\n                    size="sm"\n                    onClick={() => setOpen3(!open3)}\n                    sx={{ ml: "auto" }}\n                  >\n                    <SvgIcon>\n                      <svg\n                        width="512"\n                        height="512"\n                        viewBox="0 0 24 24"\n                        xmlns="http://www.w3.org/2000/svg"\n                      >\n                        <path\n                          fill="currentColor"\n                          d="M12 16.25a.74.74 0 0 1-.53-.22l-7-7A.75.75 0 0 1 5 7.75h14A.75.75 0 0 1 19.53 9l-7 7a.74.74 0 0 1-.53.25Zm-5.19-7L12 14.44l5.19-5.19Z"\n                        />\n                      </svg>\n                    </SvgIcon>\n                  </IconButton>\n                </ListItem>\n\n                <Box\n                  sx={{\n                    display: "grid",\n                    gridTemplateRows: open3 ? "1fr" : "0fr",\n                    transition: "0.2s ease",\n                  }}\n                >\n                  <List sx={{ fontSize: "sm", overflow: "hidden" }}>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Sizes\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Dimensions\n                      </ListItemButton>\n                    </ListItem>\n                    <ListItem>\n                      <ListItemButton component="a" href="#">\n                        <ListItemDecorator />\n                        Colors\n                      </ListItemButton>\n                    </ListItem>\n                  </List>\n                </Box>\n              </ListItem>\n            </List>\n          </Box>\n        </ListItem>\n      </List>\n    </Sheet>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Nav/Sidebar/Dashboard2"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone nav-sidebar-dashboard2\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"navsidebardashboard2",children:"NavSidebarDashboard2"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:NavSidebarDashboard2raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);