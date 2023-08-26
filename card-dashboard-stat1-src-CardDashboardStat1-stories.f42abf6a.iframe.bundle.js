"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[8547],{"./node_modules/@mui/joy/Card/Card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card_Card});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),isMuiElement=__webpack_require__("./node_modules/@mui/utils/esm/isMuiElement.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getCardUtilityClass(slot){return(0,className.d6)("MuiCard",slot)}(0,className.sI)("MuiCard",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","horizontal","vertical"]);var styleUtils=__webpack_require__("./node_modules/@mui/joy/styles/styleUtils.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","color","component","invertedColors","size","variant","children","orientation","slots","slotProps"],CardRoot=(0,styled.Z)("div",{name:"JoyCard",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({theme,ownerState})=>{var _theme$variants,_theme$colorInversion;const{p,padding,borderRadius}=(0,styleUtils.V)({theme,ownerState},["p","padding","borderRadius"]);return[(0,esm_extends.Z)({"--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,"--Card-childRadius":"max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))","--AspectRatio-radius":"var(--Card-childRadius)","--unstable_actionMargin":"calc(-1 * var(--variant-borderWidth, 0px))","--unstable_actionRadius":"var(--Card-radius)","--CardCover-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--CardOverflow-offset":"calc(-1 * var(--Card-padding))","--CardOverflow-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--Divider-inset":"calc(-1 * var(--Card-padding))"},"sm"===ownerState.size&&{"--Card-radius":theme.vars.radius.sm,"--Card-padding":"0.625rem",gap:"0.5rem"},"md"===ownerState.size&&{"--Card-radius":theme.vars.radius.md,"--Card-padding":"1rem",gap:"0.75rem 1rem"},"lg"===ownerState.size&&{"--Card-radius":theme.vars.radius.lg,"--Card-padding":"1.5rem",gap:"1rem 1.5rem"},{padding:"var(--Card-padding)",borderRadius:"var(--Card-radius)",boxShadow:theme.shadow.sm,backgroundColor:theme.vars.palette.background.surface,position:"relative",display:"flex",flexDirection:"horizontal"===ownerState.orientation?"row":"column"},theme.typography[`body-${ownerState.size}`],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color]),"context"!==ownerState.color&&ownerState.invertedColors&&(null==(_theme$colorInversion=theme.colorInversion[ownerState.variant])?void 0:_theme$colorInversion[ownerState.color]),void 0!==p&&{"--Card-padding":p},void 0!==padding&&{"--Card-padding":padding},void 0!==borderRadius&&{"--Card-radius":borderRadius}]})),Card=react.forwardRef((function Card(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyCard"}),{className,color:colorProp="neutral",component="div",invertedColors=!1,size="md",variant="plain",children,orientation="vertical",slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,esm_extends.Z)({},props,{color,component,orientation,size,variant}),classes=(ownerState=>{const{size,variant,color,orientation}=ownerState,slots={root:["root",orientation,variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`,size&&`size${(0,capitalize.Z)(size)}`]};return(0,composeClasses.Z)(slots,getCardUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:CardRoot,externalForwardedProps,ownerState}),result=(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:react.Children.map(children,((child,index)=>{if(!react.isValidElement(child))return child;const extraProps={};if((0,isMuiElement.Z)(child,["Divider"])){extraProps.inset="inset"in child.props?child.props.inset:"context";const dividerOrientation="vertical"===orientation?"horizontal":"vertical";extraProps.orientation="orientation"in child.props?child.props.orientation:dividerOrientation}return(0,isMuiElement.Z)(child,["CardOverflow"])&&("horizontal"===orientation&&(extraProps["data-parent"]="Card-horizontal"),"vertical"===orientation&&(extraProps["data-parent"]="Card-vertical")),0===index&&(extraProps["data-first-child"]=""),index===react.Children.count(children)-1&&(extraProps["data-last-child"]=""),react.cloneElement(child,extraProps)}))}));return invertedColors?(0,jsx_runtime.jsx)(ColorInversion.do,{variant,children:result}):result})),Card_Card=Card},"./blocks/card-dashboard-stat1/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardDashboardStat1raw_namespaceObject='import React from "react";\nimport Card from "@mui/joy/Card";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardDashboardStat1() {\n  return (\n    <Card\n      size="lg"\n      sx={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 1 }}\n    >\n      <div>\n        <Typography level="title-lg">Orders</Typography>\n        <Typography component="div" level="h1">\n          201\n        </Typography>\n      </div>\n      <SvgIcon fontSize="xl3">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          fill="none"\n          viewBox="0 0 24 24"\n          strokeWidth={1.5}\n          stroke="currentColor"\n        >\n          <path\n            strokeLinecap="round"\n            strokeLinejoin="round"\n            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n          />\n        </svg>\n      </SvgIcon>\n      <Typography\n        color="success"\n        startDecorator={\n          <SvgIcon color="inherit">\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              fill="none"\n              viewBox="0 0 24 24"\n              strokeWidth={1.5}\n              stroke="currentColor"\n            >\n              <path\n                strokeLinecap="round"\n                strokeLinejoin="round"\n                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"\n              />\n            </svg>\n          </SvgIcon>\n        }\n        sx={{ gridColumn: "1/-1" }}\n      >\n        8.2%{" "}\n        <Typography\n          level="body-xs"\n          textColor="text.tertiary"\n          sx={{ ml: 1, alignSelf: "last baseline" }}\n        >\n          Since last month\n        </Typography>\n      </Typography>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Dashboard/Stat1"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-dashboard-stat1\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"carddashboardstat1",children:"CardDashboardStat1"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardDashboardStat1raw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-dashboard-stat1/src/CardDashboardStat1.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Stat1:()=>Stat1,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardDashboardStat1_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-dashboard-stat1/usage.mdx"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardDashboardStat1(){return(0,jsx_runtime.jsxs)(Card.Z,{size:"lg",sx:{display:"grid",gridTemplateColumns:"1fr auto",gap:1},children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-lg",children:"Orders"}),(0,jsx_runtime.jsx)(Typography.ZP,{component:"div",level:"h1",children:"201"})]}),(0,jsx_runtime.jsx)(SvgIcon.Z,{fontSize:"xl3",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,jsx_runtime.jsxs)(Typography.ZP,{color:"success",startDecorator:(0,jsx_runtime.jsx)(SvgIcon.Z,{color:"inherit",children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"})})}),sx:{gridColumn:"1/-1"},children:["8.2%"," ",(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-xs",textColor:"text.tertiary",sx:{ml:1,alignSelf:"last baseline"},children:"Since last month"})]})]})}CardDashboardStat1.displayName="CardDashboardStat1";const CardDashboardStat1_stories={title:"Card/Dashboard/Stat1",component:CardDashboardStat1,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Stat1={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:340,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardDashboardStat1,{})})};Stat1.parameters={...Stat1.parameters,docs:{...Stat1.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 340,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardDashboardStat1 />\n    </div>\n}',...Stat1.parameters?.docs?.source}}};const __namedExportsOrder=["Stat1"]}}]);