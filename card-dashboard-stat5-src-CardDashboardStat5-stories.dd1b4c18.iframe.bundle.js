"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[2165],{"./node_modules/@mui/joy/AspectRatio/AspectRatio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatio_AspectRatio});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getAspectRatioUtilityClass(slot){return(0,className.d6)("MuiAspectRatio",slot)}(0,className.sI)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","flex","slots","slotProps"],AspectRatioRoot=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState,theme})=>{const minHeight="number"==typeof ownerState.minHeight?`${ownerState.minHeight}px`:ownerState.minHeight,maxHeight="number"==typeof ownerState.maxHeight?`${ownerState.maxHeight}px`:ownerState.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":maxHeight||"9999px","--AspectRatio-minHeight":minHeight||"0px","--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",display:ownerState.flex?"flex":"block",flex:ownerState.flex?1:"initial",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),AspectRatioContent=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(props,styles)=>styles.content})((({theme,ownerState})=>{var _theme$variants;return(0,esm_extends.Z)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:ownerState.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:ownerState.objectFit}}},theme.typography["body-md"],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),AspectRatio_AspectRatio=react.forwardRef((function AspectRatio(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyAspectRatio"}),{children,ratio="16 / 9",minHeight,maxHeight,objectFit="cover",color="neutral",variant="soft",component,flex=!1,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{flex,minHeight,maxHeight,objectFit,ratio,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root"],content:["content",variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getAspectRatioUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:AspectRatioRoot,externalForwardedProps,ownerState}),[SlotContent,contentProps]=(0,useSlot.Z)("content",{className:classes.content,elementType:AspectRatioContent,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(SlotContent,(0,esm_extends.Z)({},contentProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))}))}))},"./node_modules/@mui/joy/CardContent/CardContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CardContent_CardContent});var esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardContentUtilityClass(slot){return(0,className.d6)("MuiCardContent",slot)}(0,className.sI)("MuiCardContent",["root"]);var cardOverflowClasses=__webpack_require__("./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","component","children","orientation","slots","slotProps"],StyledCardContentRoot=(0,styled.Z)("div")((({ownerState})=>({display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column",flex:9999,zIndex:1,columnGap:"var(--Card-padding)",rowGap:"max(2px, calc(0.1875 * var(--Card-padding)))",padding:"var(--unstable_padding)",[`.${cardOverflowClasses.Z.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}}))),CardContentRoot=(0,styled.Z)(StyledCardContentRoot,{name:"JoyCardContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({}),CardContent=react.forwardRef((function CardContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCardContent"}),{className,component="div",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),ownerState=(0,esm_extends.Z)({},props,{component,orientation}),classes=(0,composeClasses.Z)({root:["root"]},getCardContentUtilityClass,{}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),CardContent_CardContent=CardContent},"./node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>getCardOverflowUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardOverflowUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiCardOverflow",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"])},"./blocks/card-dashboard-stat5/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardDashboardStat5raw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport Divider from "@mui/joy/Divider";\nimport IconButton from "@mui/joy/IconButton";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardDashboardStat5() {\n  return (\n    <Card>\n      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>\n        <Typography textColor="text.icon" sx={{ flex: "auto" }}>\n          Total Profit\n        </Typography>\n        <IconButton variant="plain" color="neutral" sx={{ mt: -1, mr: -1 }}>\n          <SvgIcon>\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              fill="none"\n              viewBox="0 0 24 24"\n              strokeWidth={1.5}\n              stroke="currentColor"\n            >\n              <path\n                strokeLinecap="round"\n                strokeLinejoin="round"\n                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"\n              />\n            </svg>\n          </SvgIcon>\n        </IconButton>\n      </CardContent>\n      <Typography level="h1" component="div">\n        $42,000.00\n      </Typography>\n      <Divider />\n      <CardContent orientation="horizontal">\n        <Typography\n          color="success"\n          level="body-sm"\n          startDecorator={\n            <AspectRatio\n              variant="soft"\n              color="success"\n              ratio="1"\n              sx={{ width: 20, borderRadius: "50%" }}\n            >\n              <div>\n                <SvgIcon color="inherit" fontSize="xs">\n                  <svg\n                    xmlns="http://www.w3.org/2000/svg"\n                    fill="none"\n                    viewBox="0 0 24 24"\n                    strokeWidth={2}\n                    stroke="currentColor"\n                  >\n                    <path\n                      strokeLinecap="round"\n                      strokeLinejoin="round"\n                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"\n                    />\n                  </svg>\n                </SvgIcon>\n              </div>\n            </AspectRatio>\n          }\n          sx={{ flex: "auto" }}\n        >\n          +33.57%\n        </Typography>\n        <Typography textColor="text.icon" level="body-sm">\n          Profit in this period\n        </Typography>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Dashboard/Stat5"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-dashboard-stat5\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carddashboardstat5",children:"CardDashboardStat5"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardDashboardStat5raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-dashboard-stat5/src/CardDashboardStat5.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Stat5:()=>Stat5,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardDashboardStat5_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-dashboard-stat5/usage.mdx"),AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),Divider=__webpack_require__("./node_modules/@mui/joy/Divider/Divider.js"),IconButton=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardDashboardStat5(){return(0,jsx_runtime.jsxs)(Card.Z,{children:[(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{alignItems:"center"},children:[(0,jsx_runtime.jsx)(Typography.ZP,{textColor:"text.icon",sx:{flex:"auto"},children:"Total Profit"}),(0,jsx_runtime.jsx)(IconButton.ZP,{variant:"plain",color:"neutral",sx:{mt:-1,mr:-1},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})})})})]}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h1",component:"div",children:"$42,000.00"}),(0,jsx_runtime.jsx)(Divider.Z,{}),(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",children:[(0,jsx_runtime.jsx)(Typography.ZP,{color:"success",level:"body-sm",startDecorator:(0,jsx_runtime.jsx)(AspectRatio.Z,{variant:"soft",color:"success",ratio:"1",sx:{width:20,borderRadius:"50%"},children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(SvgIcon.Z,{color:"inherit",fontSize:"xs",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"})})})})}),sx:{flex:"auto"},children:"+33.57%"}),(0,jsx_runtime.jsx)(Typography.ZP,{textColor:"text.icon",level:"body-sm",children:"Profit in this period"})]})]})}CardDashboardStat5.displayName="CardDashboardStat5";const CardDashboardStat5_stories={title:"Card/Dashboard/Stat5",component:CardDashboardStat5,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Stat5={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardDashboardStat5,{})})};Stat5.parameters={...Stat5.parameters,docs:{...Stat5.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardDashboardStat5 />\n    </div>\n}',...Stat5.parameters?.docs?.source}}};const __namedExportsOrder=["Stat5"]}}]);