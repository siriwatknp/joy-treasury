"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[6657],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/card-blog-technology/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardBlogTechnologyraw_namespaceObject='import React from "react";\nimport {\n  AspectRatio,\n  Avatar,\n  Card,\n  CardContent,\n  CardOverflow,\n  Chip,\n  Stack,\n  Typography,\n} from "@mui/joy";\n\nexport default function CardBlogTechnology() {\n  return (\n    <Card\n      variant="plain"\n      sx={{\n        boxShadow: "md",\n        "--Card-padding": "24px",\n        "--Card-radius": "16px",\n        gap: "24px",\n      }}\n    >\n      <CardOverflow>\n        <AspectRatio ratio="4/3">\n          <img\n            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"\n            srcSet="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"\n            loading="lazy"\n            alt=""\n          />\n        </AspectRatio>\n      </CardOverflow>\n      <CardContent>\n        <Chip\n          size="sm"\n          sx={{\n            "--Chip-paddingInline": "10px",\n            "--Chip-minHeight": "0px",\n            color: "#fff",\n            bgcolor: "#4cb1ce",\n            alignItems: "center",\n            paddingY: "1px",\n            fontSize: "10px",\n            fontWeight: "lg",\n          }}\n        >\n          TECHNOLOGY\n        </Chip>\n        <Typography level="title-md">\n          Why is the Tesla Cybertruck designed the way it is?\n        </Typography>\n        <Typography level="body-sm">\n          An exploration into the truck&apos;s polarising design.\n        </Typography>\n      </CardContent>\n      <Stack\n        direction="row"\n        justifyContent="flex-start"\n        alignItems="center"\n        spacing={2}\n        marginTop="12px"\n      >\n        <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />\n        <Stack\n          direction="column"\n          justifyContent="flex-start"\n          alignItems="flex-start"\n        >\n          <Typography level="title-md">Carrie Brewer</Typography>\n          <Typography\n            level="body-xs"\n            sx={{ color: "#979aac", fontWeight: 400 }}\n          >\n            2 h ago\n          </Typography>\n        </Stack>\n      </Stack>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Blog/Technology"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-blog-technology\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardblogtechnology",children:"CardBlogTechnology"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardBlogTechnologyraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);