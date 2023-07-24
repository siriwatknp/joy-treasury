"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[217],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-news-plane/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardNewsPlaneraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Avatar from "@mui/joy/Avatar";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport CardOverflow from "@mui/joy/CardOverflow";\nimport Link from "@mui/joy/Link";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardNewsPlane() {\n  return (\n    <Card sx={{ borderRadius: "xl", boxShadow: "none" }}>\n      <CardOverflow>\n        <AspectRatio\n          sx={{\n            borderBottomLeftRadius: "var(--Card-radius)",\n            borderBottomRightRadius: "var(--Card-radius)",\n          }}\n        >\n          <img src="https://images.unsplash.com/photo-1619941400844-ec5ef7495cb8?fm=jpg&fit=crop&w=1080&q=80&fit=max" />\n        </AspectRatio>\n      </CardOverflow>\n      <CardContent>\n        <Typography level="h4" component="h2">\n          <Link href="#" overlay underline="none" textColor="inherit">\n            Supersonic Airline Test Flight Success!\n          </Link>\n        </Typography>\n      </CardContent>\n      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>\n        <Avatar src="https://i.pravatar.cc/300" />\n        <Typography level="body-sm" textColor="text.tertiary">\n          John Smith\n        </Typography>\n        <Typography\n          level="body-sm"\n          textColor="text.tertiary"\n          sx={{ ml: "auto" }}\n        >\n          10 Jan 2020\n        </Typography>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/News/Plane"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-news-plane\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardnewsplane",children:"CardNewsPlane"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardNewsPlaneraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);