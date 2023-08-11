"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[6163],{"./node_modules/@mui/joy/AspectRatio/AspectRatio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatio_AspectRatio});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),ColorInversion=__webpack_require__("./node_modules/@mui/joy/styles/ColorInversion.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getAspectRatioUtilityClass(slot){return(0,className.d6)("MuiAspectRatio",slot)}(0,className.sI)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","slots","slotProps"],AspectRatioRoot=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState,theme})=>{const minHeight="number"==typeof ownerState.minHeight?`${ownerState.minHeight}px`:ownerState.minHeight,maxHeight="number"==typeof ownerState.maxHeight?`${ownerState.maxHeight}px`:ownerState.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":maxHeight||"9999px","--AspectRatio-minHeight":minHeight||"0px","--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),AspectRatioContent=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(props,styles)=>styles.content})((({theme,ownerState})=>{var _theme$variants;return(0,esm_extends.Z)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:ownerState.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:ownerState.objectFit}}},theme.typography["body-md"],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),AspectRatio_AspectRatio=react.forwardRef((function AspectRatio(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyAspectRatio"}),{children,ratio="16 / 9",minHeight,maxHeight,objectFit="cover",color:colorProp="neutral",variant="soft",component,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),{getColor}=(0,ColorInversion.VT)(variant),color=getColor(inProps.color,colorProp),ownerState=(0,esm_extends.Z)({},props,{minHeight,maxHeight,objectFit,ratio,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root"],content:["content",variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getAspectRatioUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:AspectRatioRoot,externalForwardedProps,ownerState}),[SlotContent,contentProps]=(0,useSlot.Z)("content",{className:classes.content,elementType:AspectRatioContent,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(SlotContent,(0,esm_extends.Z)({},contentProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))}))}))},"./node_modules/@mui/joy/Button/buttonClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>getButtonUtilityClass,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _className__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getButtonUtilityClass(slot){return(0,_className__WEBPACK_IMPORTED_MODULE_0__.d6)("MuiButton",slot)}const __WEBPACK_DEFAULT_EXPORT__=(0,_className__WEBPACK_IMPORTED_MODULE_0__.sI)("MuiButton",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","focusVisible","disabled","sizeSm","sizeMd","sizeLg","fullWidth","startDecorator","endDecorator","loading","loadingIndicatorCenter"])},"./blocks/card-news-plane/src/CardNewsPlane.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Block:()=>Block,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardNewsPlane_stories});__webpack_require__("./node_modules/react/index.js");var AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Avatar=__webpack_require__("./node_modules/@mui/joy/Avatar/Avatar.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),CardOverflow=__webpack_require__("./node_modules/@mui/joy/CardOverflow/CardOverflow.js"),Link=__webpack_require__("./node_modules/@mui/joy/Link/Link.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardNewsPlane(){return(0,jsx_runtime.jsxs)(Card.Z,{sx:{borderRadius:"xl",boxShadow:"none"},children:[(0,jsx_runtime.jsx)(CardOverflow.Z,{children:(0,jsx_runtime.jsx)(AspectRatio.Z,{sx:{borderBottomLeftRadius:"var(--Card-radius)",borderBottomRightRadius:"var(--Card-radius)"},children:(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/photo-1619941400844-ec5ef7495cb8?fm=jpg&fit=crop&w=1080&q=80&fit=max"})})}),(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsx)(Typography.ZP,{level:"h4",component:"h2",children:(0,jsx_runtime.jsx)(Link.Z,{href:"#",overlay:!0,underline:"none",textColor:"inherit",children:"Supersonic Airline Test Flight Success!"})})}),(0,jsx_runtime.jsxs)(CardContent.Z,{orientation:"horizontal",sx:{alignItems:"center"},children:[(0,jsx_runtime.jsx)(Avatar.Z,{src:"https://i.pravatar.cc/300"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",textColor:"text.tertiary",children:"John Smith"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",textColor:"text.tertiary",sx:{ml:"auto"},children:"10 Jan 2020"})]})]})}CardNewsPlane.displayName="CardNewsPlane";const CardNewsPlane_stories={title:"Card/News/Plane",component:CardNewsPlane,parameters:{layout:"centered"}},Block={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:300,maxWidth:"100%"},children:(0,jsx_runtime.jsx)(CardNewsPlane,{})})};Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 300,\n    maxWidth: "100%"\n  }}>\n      <CardNewsPlane />\n    </div>\n}',...Block.parameters?.docs?.source}}};const __namedExportsOrder=["Block"]}}]);