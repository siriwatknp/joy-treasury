"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[4862],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./blocks/landing-main-benefit/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const LandingMainBenefitraw_namespaceObject='import React from "react";\nimport Box from "@mui/joy/Box";\nimport Container from "@mui/joy/Container";\nimport Divider from "@mui/joy/Divider";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nfunction randomString(length: number) {\n  let result = "";\n  let characters =\n    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";\n  let charactersLength = characters.length;\n  for (let i = 0; i < length; i++)\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  return result;\n}\n\nfunction useCharReplace(text: string) {\n  const [index, setIndex] = React.useState(1);\n  const [randomText, setRandomText] = React.useState(\n    randomString(text.length - 1)\n  );\n  const indexRef = React.useRef(index);\n\n  React.useEffect(() => {\n    setIndex(1);\n    setRandomText(randomString(text.length - 1));\n    indexRef.current = 1;\n    const interval = window.setInterval(() => {\n      indexRef.current += 1;\n      if (indexRef.current === text.length + 1) {\n        clearInterval(interval);\n      } else {\n        setIndex(indexRef.current);\n        setRandomText(randomString(text.length - indexRef.current));\n      }\n    }, 50);\n    return () => {\n      clearInterval(interval);\n    };\n  }, [text]);\n\n  return [text.slice(0, index), randomText];\n}\n\nfunction useTextDecryption(texts: Array<string>, interval: number = 3000) {\n  const [dataIndex, setDataIndex] = React.useState(0);\n  const [text, randomText] = useCharReplace(texts[dataIndex]);\n  React.useEffect(() => {\n    setTimeout(() => {\n      setDataIndex((dataIndex) => (dataIndex + 1) % texts.length);\n    }, interval);\n  }, [dataIndex, interval]);\n  return [text, randomText];\n}\n\nexport default function LandingMainBenefit() {\n  // TODO: Replace with your data\n  const data = [\n    "encrypt access tokens",\n    "share encrypted data",\n    "encrypt credit cards",\n  ];\n  const [text, randomText] = useTextDecryption(data);\n  return (\n    <Container\n      sx={{\n        py: {\n          xs: "3.2rem",\n          md: "8rem",\n        },\n      }}\n    >\n      <Box sx={{ px: "1rem" }}>\n        <Typography\n          level="h2"\n          fontSize="clamp(1.60rem, calc(0.87rem + 2.92vw), 3.50rem)"\n          fontWeight="md"\n          lineHeight="1.2"\n          sx={{\n            mb: "2rem",\n            background:\n              "radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",\n            WebkitTextFillColor: "transparent",\n            WebkitBackgroundClip: "text",\n          }}\n        >\n          Use Evervault to <br />\n          {text}\n          <Typography\n            sx={{\n              background:\n                "radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",\n              WebkitTextFillColor: "transparent",\n              WebkitBackgroundClip: "text",\n              opacity: 0.25,\n            }}\n          >\n            {randomText}\n          </Typography>\n        </Typography>\n        <Divider sx={{ mt: "1.2rem", mb: "2.4rem" }} />\n        <Box\n          sx={{\n            display: "flex",\n            flexWrap: "wrap",\n            gap: "3.2rem",\n            mb: {\n              xs: "2rem",\n              md: 0,\n            },\n            "& > *": {\n              minWidth: "clamp(0px, (700px - 100%) * 999, 100%)",\n              flex: 1,\n            },\n          }}\n        >\n          <Box>\n            <Typography\n              level="title-md"\n              sx={{ mb: 0.5, alignItems: "flex-start" }}\n              startDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="24"\n                    height="24"\n                    viewBox="0 0 24 24"\n                    fill="none"\n                    stroke="currentColor"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  >\n                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\n                    <path d="m9 12 2 2 4-4" />\n                  </svg>\n                </SvgIcon>\n              }\n            >\n              Eliminate Data Breach Risk\n            </Typography>\n            <Typography level="body-sm">\n              Encrypting sensitive data before it touches your infrastructure\n              means you never handle sensitive data in plaintext, so when you\n              get breached you don’t need to worry about the consequences.\n            </Typography>\n          </Box>\n          <Box>\n            <Typography\n              level="title-md"\n              sx={{ mb: 0.5, alignItems: "flex-start" }}\n              startDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="24"\n                    height="24"\n                    viewBox="0 0 24 24"\n                    fill="none"\n                    stroke="currentColor"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  >\n                    <line x1="10" x2="14" y1="2" y2="2" />\n                    <line x1="12" x2="15" y1="14" y2="11" />\n                    <circle cx="12" cy="14" r="8" />\n                  </svg>\n                </SvgIcon>\n              }\n            >\n              Streamline Compliance\n            </Typography>\n            <Typography level="body-sm">\n              By encrypting in-scope data, Evervault reduces the financial cost\n              and overhead of becoming compliant. Evervault is fully compliant\n              with frameworks like PCI DSS Level 1, HIPAA and SOC 2.\n            </Typography>\n          </Box>\n          <Box>\n            <Typography\n              level="title-md"\n              sx={{ mb: 0.5, alignItems: "flex-start" }}\n              startDecorator={\n                <SvgIcon>\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    width="24"\n                    height="24"\n                    viewBox="0 0 24 24"\n                    fill="none"\n                    stroke="currentColor"\n                    stroke-width="2"\n                    stroke-linecap="round"\n                    stroke-linejoin="round"\n                  >\n                    <path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6" />\n                    <circle cx="16" cy="19" r="2" />\n                    <path d="M16 11v-1" />\n                    <path d="M16 17v-2" />\n                  </svg>\n                </SvgIcon>\n              }\n            >\n              Sign Customers Faster\n            </Typography>\n            <Typography level="body-sm">\n              Using Evervault proves to your customers that you take data\n              security seriously. You’ll pass vendor security reviews quickly\n              and close deals with the most security-conscious customers.\n            </Typography>\n          </Box>\n        </Box>\n      </Box>\n    </Container>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Landing/Main/Benefit"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone landing-main-benefit\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"landingmainbenefit",children:"LandingMainBenefit"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:LandingMainBenefitraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);