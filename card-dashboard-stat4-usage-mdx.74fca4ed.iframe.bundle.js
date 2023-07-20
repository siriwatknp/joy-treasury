"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[743],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/card-dashboard-stat4/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardDashboardStat4raw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport IconButton from "@mui/joy/IconButton";\nimport Typography from "@mui/joy/Typography";\nimport SvgIcon from "@mui/joy/SvgIcon";\n\nexport default function CardDashboardStat4() {\n  return (\n    <Card orientation="horizontal">\n      <AspectRatio\n        variant="soft"\n        color="primary"\n        ratio="1"\n        sx={{ width: 48, borderRadius: "50%" }}\n      >\n        <div>\n          <SvgIcon>\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 24 24"\n              fill="currentColor"\n            >\n              <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />\n              <path\n                fillRule="evenodd"\n                d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"\n                clipRule="evenodd"\n              />\n            </svg>\n          </SvgIcon>\n        </div>\n      </AspectRatio>\n      <CardContent>\n        <Typography\n          level="h1"\n          component="div"\n          endDecorator={\n            <Typography\n              level="body-xs"\n              color="success"\n              endDecorator={\n                <SvgIcon color="success" fontSize="md">\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    strokeWidth={2}\n                    stroke="currentColor"\n                  >\n                    <path\n                      strokeLinecap="round"\n                      strokeLinejoin="round"\n                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"\n                    />\n                  </svg>\n                </SvgIcon>\n              }\n            >\n              20.6%\n            </Typography>\n          }\n          sx={{ alignItems: "baseline" }}\n        >\n          875\n        </Typography>\n        <Typography textColor="text.tertiary">Mobile</Typography>\n      </CardContent>\n      <IconButton\n        variant="plain"\n        color="neutral"\n        sx={{ alignSelf: "flex-start", mt: -1, mr: -1 }}\n      >\n        <SvgIcon>\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n            strokeWidth={1.5}\n            stroke="currentColor"\n          >\n            <path\n              strokeLinecap="round"\n              strokeLinejoin="round"\n              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"\n            />\n          </svg>\n        </SvgIcon>\n      </IconButton>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Dashboard/Stat4"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-dashboard-stat4\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carddashboardstat4",children:"CardDashboardStat4"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardDashboardStat4raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);