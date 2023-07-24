"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[63],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/card-cover-interest/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardCoverInterestraw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport Card from "@mui/joy/Card";\nimport CardCover from "@mui/joy/CardCover";\nimport CardContent from "@mui/joy/CardContent";\nimport Link from "@mui/joy/Link";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardCoverInterest() {\n  return (\n    <Box\n      sx={{\n        display: "grid",\n        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",\n        gap: 2,\n      }}\n    >\n      {[\n        {\n          image:\n            "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",\n          title: "Gaming",\n          description: "Gamer\'s paradise",\n        },\n        {\n          image:\n            "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",\n          title: "Music",\n          description: "Feel good",\n        },\n      ].map((item) => (\n        <Card\n          key={item.title}\n          variant="solid"\n          invertedColors\n          sx={{ minHeight: 120 }}\n        >\n          <CardCover>\n            <img src={item.image} alt="Playing a game" />\n          </CardCover>\n          <CardCover\n            sx={{\n              background: "rgba(0 0 0 / 0.5)",\n              backdropFilter: "blur(2px)",\n            }}\n          />\n          <CardContent sx={{ alignItems: "center", justifyContent: "center" }}>\n            <Typography level="h2">\n              <Link\n                underline="none"\n                textColor="inherit"\n                overlay\n                href="#" // 👈 TODO: link to another page here.\n                sx={{\n                  "--joy-palette-focusVisible": (theme) =>\n                    theme.vars.palette.primary[500],\n                }}\n              >\n                {item.title}\n              </Link>\n            </Typography>\n            <Typography level="body-sm">{item.description}</Typography>\n          </CardContent>\n        </Card>\n      ))}\n    </Box>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Cover/Interest"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-cover-interest\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardcoverinterest",children:"CardCoverInterest"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardCoverInterestraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);