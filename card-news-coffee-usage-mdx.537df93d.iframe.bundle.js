"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[4161],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-news-coffee/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardNewsCoffeeraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Avatar from "@mui/joy/Avatar";\nimport Box from "@mui/joy/Box";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport Link from "@mui/joy/Link";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardNewsCoffee() {\n  return <Card>\n    <AspectRatio\n      sx={{\n        borderBottomLeftRadius: "var(--Card-radius)",\n        borderBottomRightRadius: "var(--Card-radius)",\n      }}\n    >\n      <img src="https://images.squarespace-cdn.com/content/v1/574ca6dac2ea517f706dfb89/e3978b8b-a830-4510-bc80-7132f933b270/xviiizz-3b_tjW24pDk-unsplash.jpg?format=1500w" />\n    </AspectRatio>\n    <CardContent>\n      <Typography level="h4" component="h2">\n        <Link href="#" overlay underline="none" textColor="inherit">\n          How to make perfect morning coffee, according to the Science\n        </Link>\n      </Typography>\n    </CardContent>\n    <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>\n      <Avatar src="https://i.pravatar.cc/300?img=1" />\n      <Box>\n        <Typography fontWeight="lg">\n          Tara Gibson\n        </Typography>\n        <Typography level="body-sm" textColor="text.tertiary">\n          Jul 13, 2019\n        </Typography>\n      </Box>\n    </CardContent>\n  </Card>\n}';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/News/Coffee"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-news-coffee\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardnewscoffee",children:"CardNewsCoffee"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardNewsCoffeeraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);