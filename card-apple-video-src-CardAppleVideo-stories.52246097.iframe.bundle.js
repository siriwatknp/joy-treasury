"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[2622],{"./node_modules/@mui/joy/AspectRatio/AspectRatio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatio_AspectRatio});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getAspectRatioUtilityClass(slot){return(0,className.d6)("MuiAspectRatio",slot)}(0,className.sI)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","slots","slotProps"],AspectRatioRoot=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState,theme})=>{const minHeight="number"==typeof ownerState.minHeight?`${ownerState.minHeight}px`:ownerState.minHeight,maxHeight="number"==typeof ownerState.maxHeight?`${ownerState.maxHeight}px`:ownerState.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":maxHeight||"9999px","--AspectRatio-minHeight":minHeight||"0px","--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),AspectRatioContent=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(props,styles)=>styles.content})((({theme,ownerState})=>{var _theme$variants;return(0,esm_extends.Z)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:ownerState.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:ownerState.objectFit}}},theme.typography["body-md"],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),AspectRatio_AspectRatio=react.forwardRef((function AspectRatio(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyAspectRatio"}),{children,ratio="16 / 9",minHeight,maxHeight,objectFit="cover",color:colorProp="neutral",variant="soft",component,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,esm_extends.Z)({},props,{minHeight,maxHeight,objectFit,ratio,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root"],content:["content",variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getAspectRatioUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:AspectRatioRoot,externalForwardedProps,ownerState}),[SlotContent,contentProps]=(0,useSlot.Z)("content",{className:classes.content,elementType:AspectRatioContent,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(SlotContent,(0,esm_extends.Z)({},contentProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))}))}))},"./blocks/card-apple-video/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardAppleVideoraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport CardOverflow from "@mui/joy/CardOverflow";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardAppleVideo() {\n  return (\n    <Card sx={{ borderRadius: "xl", boxShadow: "lg" }}>\n      <CardOverflow>\n        <AspectRatio ratio="4/3" maxHeight={240}>\n          <video\n            autoPlay\n            loop\n            muted\n            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"\n            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"\n          >\n            Sorry, your browser doesn\'t support embedded videos, but don\'t\n            worry, you can\n            <a href="https://archive.org/details/BigBuckBunny_124">\n              download it\n            </a>\n            and watch it with your favorite video player!\n          </video>\n        </AspectRatio>\n      </CardOverflow>\n      <CardContent>\n        <Typography level="title-sm" textColor="neutral.500">\n          GET CREATIVE\n        </Typography>\n        <Typography level="h3" fontWeight="xl" sx={{ textWrap: "balance" }}>\n          Make videos with your family\n        </Typography>\n        <Typography level="body-sm">\n          Record and remember good times with your loved ones.\n        </Typography>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Apple/Video"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-apple-video\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardapplevideo",children:"CardAppleVideo"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardAppleVideoraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.Z,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-apple-video/src/CardAppleVideo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Video:()=>Video,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardAppleVideo_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-apple-video/usage.mdx"),AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),CardOverflow=__webpack_require__("./node_modules/@mui/joy/CardOverflow/CardOverflow.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardAppleVideo(){return(0,jsx_runtime.jsxs)(Card.Z,{sx:{borderRadius:"xl",boxShadow:"lg"},children:[(0,jsx_runtime.jsx)(CardOverflow.Z,{children:(0,jsx_runtime.jsx)(AspectRatio.Z,{ratio:"4/3",maxHeight:240,children:(0,jsx_runtime.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,src:"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",poster:"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",children:["Sorry, your browser doesn't support embedded videos, but don't worry, you can",(0,jsx_runtime.jsx)("a",{href:"https://archive.org/details/BigBuckBunny_124",children:"download it"}),"and watch it with your favorite video player!"]})})}),(0,jsx_runtime.jsxs)(CardContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-sm",textColor:"neutral.500",children:"GET CREATIVE"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h3",fontWeight:"xl",sx:{textWrap:"balance"},children:"Make videos with your family"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Record and remember good times with your loved ones."})]})]})}CardAppleVideo.displayName="CardAppleVideo";const CardAppleVideo_stories={title:"Card/Apple/Video",component:CardAppleVideo,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Video={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:360,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardAppleVideo,{})})};Video.parameters={...Video.parameters,docs:{...Video.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 360,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardAppleVideo />\n    </div>\n}',...Video.parameters?.docs?.source}}};const __namedExportsOrder=["Video"]}}]);