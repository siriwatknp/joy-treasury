"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[7718],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-social-profile/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardSocialProfileraw_namespaceObject='import React from "react";\nimport { Link, SvgIcon } from "@mui/joy";\nimport Avatar from "@mui/joy/Avatar";\nimport Box from "@mui/joy/Box";\nimport Button from "@mui/joy/Button";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport IconButton from "@mui/joy/IconButton";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardSocialProfile() {\n  return (\n    <Card\n      variant="plain"\n      sx={{ p: "20px", borderRadius: "20px", bgcolor: "background.body" }}\n    >\n      <CardContent sx={{ gap: "12px" }}>\n        <Box\n          sx={{\n            display: "flex",\n            alignItems: "center",\n            gap: "12px",\n          }}\n        >\n          <Avatar\n            src="https://i.pinimg.com/originals/c7/e2/5c/c7e25c9979b38201ee2b1729b2f3c151.png"\n            sx={{ width: "92px", height: "auto" }}\n          />\n          <Box\n            sx={{\n              display: "flex",\n              flexDirection: "column",\n              gap: "8px",\n            }}\n          >\n            <Box\n              sx={{ display: "flex", gap: "12px", justifyContent: "center" }}\n            >\n              <Box\n                sx={{\n                  display: "flex",\n                  flexDirection: "column",\n                  alignItems: "center",\n                }}\n              >\n                <Typography\n                  level="body-sm"\n                  sx={{ color: "text.primary", fontWeight: "bold" }}\n                >\n                  142\n                </Typography>\n                <Typography level="body-sm">Posts</Typography>\n              </Box>\n              <Box\n                sx={{\n                  display: "flex",\n                  flexDirection: "column",\n                  alignItems: "center",\n                }}\n              >\n                <Typography\n                  level="body-sm"\n                  sx={{ color: "text.primary", fontWeight: "bold" }}\n                >\n                  7.4M\n                </Typography>\n                <Typography level="body-sm">Followers</Typography>\n              </Box>\n              <Box\n                sx={{\n                  display: "flex",\n                  flexDirection: "column",\n                  alignItems: "center",\n                }}\n              >\n                <Typography\n                  level="body-sm"\n                  sx={{ color: "text.primary", fontWeight: "bold" }}\n                >\n                  117\n                </Typography>\n                <Typography level="body-sm">Following</Typography>\n              </Box>\n            </Box>\n            <Box sx={{ display: "flex", gap: "8px" }}>\n              <Button\n                variant="solid"\n                sx={{\n                  borderRadius: "20px",\n                  width: "70%",\n                  bgcolor: "primary.500",\n                  fontSize: 16,\n                }}\n              >\n                Message\n              </Button>\n              <IconButton\n                variant="outlined"\n                size="sm"\n                sx={{\n                  borderRadius: 40,\n                  backgroundColor: "white",\n                  width: "30%",\n                  "&:hover": {\n                    backgroundColor: "white",\n                  },\n                }}\n              >\n                <SvgIcon\n                  sx={{\n                    color: "primary.500",\n                  }}\n                >\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="16"\n                    height="16"\n                    viewBox="0 0 24 24"\n                    fill="none"\n                    stroke="currentColor"\n                    strokeWidth="2"\n                    strokeLinecap="round"\n                    strokeLinejoin="round"\n                  >\n                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />\n                    <circle cx="9" cy="7" r="4" />\n                    <polyline points="16 11 18 13 22 9" />\n                  </svg>\n                </SvgIcon>\n              </IconButton>\n            </Box>\n          </Box>\n        </Box>\n        <Box>\n          <Box sx={{ marginBottom: "8px" }}>\n            <Typography level="h3">Saba</Typography>\n            <Typography level="body-md" sx={{ fontWeight: "semibold" }}>\n              Band / Musician\n            </Typography>\n          </Box>\n          <Typography level="body-md" textColor="text.primary">\n            PIVOTGANG 🏀\n          </Typography>\n          <Typography level="body-md" textColor="text.primary">\n            CARE FOR ME TOUR OUT NOW 🎙\n          </Typography>\n          <Link level="body-sm">#CHI-TOWN</Link>\n          <Typography level="body-sm" textColor="text.primary">\n            This remind me of before we had insomnia\n          </Typography>\n          <Typography level="body-sm" textColor="text.primary">\n            Sleepin\' peacefully, never needed a pile of drugs\n          </Typography>\n          <Link\n            level="body-sm"\n            sx={{ color: "primary.500", fontWeight: "bold" }}\n          >\n            pivotgang.com\n          </Link>\n        </Box>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Social/Profile"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-social-profile\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardsocialprofile",children:"CardSocialProfile"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardSocialProfileraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);