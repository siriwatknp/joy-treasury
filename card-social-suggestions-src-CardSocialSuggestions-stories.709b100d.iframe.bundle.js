"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[690],{"./node_modules/@mui/joy/AspectRatio/AspectRatio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AspectRatio_AspectRatio});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getAspectRatioUtilityClass(slot){return(0,className.d6)("MuiAspectRatio",slot)}(0,className.sI)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","flex","slots","slotProps"],AspectRatioRoot=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState,theme})=>{const minHeight="number"==typeof ownerState.minHeight?`${ownerState.minHeight}px`:ownerState.minHeight,maxHeight="number"==typeof ownerState.maxHeight?`${ownerState.maxHeight}px`:ownerState.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":maxHeight||"9999px","--AspectRatio-minHeight":minHeight||"0px","--Icon-color":"neutral"!==ownerState.color||"solid"===ownerState.variant?"currentColor":theme.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",display:ownerState.flex?"flex":"block",flex:ownerState.flex?1:"initial",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),AspectRatioContent=(0,styled.Z)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(props,styles)=>styles.content})((({theme,ownerState})=>{var _theme$variants;return(0,esm_extends.Z)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:ownerState.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:ownerState.objectFit}}},theme.typography["body-md"],null==(_theme$variants=theme.variants[ownerState.variant])?void 0:_theme$variants[ownerState.color])})),AspectRatio_AspectRatio=react.forwardRef((function AspectRatio(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyAspectRatio"}),{children,ratio="16 / 9",minHeight,maxHeight,objectFit="cover",color="neutral",variant="soft",component,flex=!1,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{flex,minHeight,maxHeight,objectFit,ratio,color,variant}),classes=(ownerState=>{const{variant,color}=ownerState,slots={root:["root"],content:["content",variant&&`variant${(0,capitalize.Z)(variant)}`,color&&`color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getAspectRatioUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:classes.root,elementType:AspectRatioRoot,externalForwardedProps,ownerState}),[SlotContent,contentProps]=(0,useSlot.Z)("content",{className:classes.content,elementType:AspectRatioContent,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children:(0,jsx_runtime.jsx)(SlotContent,(0,esm_extends.Z)({},contentProps,{children:react.Children.map(children,((child,index)=>0===index&&react.isValidElement(child)?react.cloneElement(child,{"data-first-child":""}):child))}))}))}))},"./node_modules/@mui/joy/ListDivider/ListDivider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListDivider_ListDivider});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),Divider=__webpack_require__("./node_modules/@mui/joy/Divider/Divider.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getListDividerUtilityClass(slot){return(0,className.d6)("MuiListDivider",slot)}(0,className.sI)("MuiListDivider",["root","insetGutter","insetStartDecorator","insetStartContent","horizontal","vertical"]);var RowListContext=__webpack_require__("./node_modules/@mui/joy/List/RowListContext.js"),ComponentListContext=__webpack_require__("./node_modules/@mui/joy/List/ComponentListContext.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","role","className","children","inset","orientation","slots","slotProps"],ListDividerRoot=(0,styled.Z)(Divider.n,{name:"JoyListDivider",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState})=>(0,esm_extends.Z)({},"context"===ownerState.inset&&{"--Divider-inset":"calc(-1 * var(--List-padding))"},ownerState.row&&(0,esm_extends.Z)({marginInline:"var(--ListDivider-gap)"},"gutter"===ownerState.inset&&{marginBlock:"var(--ListItem-paddingY)"},void 0===ownerState["data-first-child"]&&{marginInlineStart:"calc(var(--List-gap) + var(--ListDivider-gap))"}),!ownerState.row&&(0,esm_extends.Z)({},void 0===ownerState["data-first-child"]&&{marginBlockStart:"calc(var(--List-gap) + var(--ListDivider-gap))"},{marginBlockEnd:"var(--ListDivider-gap)"},"gutter"===ownerState.inset&&{marginInlineStart:"var(--ListItem-paddingLeft)",marginInlineEnd:"var(--ListItem-paddingRight)"},"startDecorator"===ownerState.inset&&{marginInlineStart:"var(--ListItem-paddingLeft)"},"startContent"===ownerState.inset&&{marginInlineStart:"calc(var(--ListItem-paddingLeft) + var(--ListItemDecorator-size))"})))),ListDivider=react.forwardRef((function ListDivider(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListDivider"}),row=react.useContext(RowListContext.Z),listComponent=react.useContext(ComponentListContext.Z),{component:componentProp,role:roleProp,className,children,inset="context",orientation:orientationProp,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),[listElement]=(null==listComponent?void 0:listComponent.split(":"))||["",""],component=componentProp||(listElement&&!listElement.match(/^(ul|ol|menu)$/)?"div":"li"),role=roleProp||("li"===component?"separator":void 0),orientation=orientationProp||(row?"vertical":"horizontal"),ownerState=(0,esm_extends.Z)({},props,{inset,row,orientation,component,role}),classes=(ownerState=>{const{orientation,inset}=ownerState,slots={root:["root",orientation,inset&&"context"!==inset&&`inset${(0,capitalize.Z)(inset)}`]};return(0,composeClasses.Z)(slots,getListDividerUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListDividerRoot,externalForwardedProps,ownerState,additionalProps:(0,esm_extends.Z)({as:component,role},"separator"===role&&"vertical"===orientation&&{"aria-orientation":"vertical"})});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListDivider_ListDivider=ListDivider},"./node_modules/@mui/joy/ListItemButton/ListItemButtonOrientationContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext("horizontal")},"./node_modules/@mui/joy/ListItemContent/ListItemContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItemContent_ListItemContent});var esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getListItemContentUtilityClass(slot){return(0,className.d6)("MuiListItemContent",slot)}(0,className.sI)("MuiListItemContent",["root"]);var useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","className","children","slots","slotProps"],ListItemContentRoot=(0,styled.Z)("div",{name:"JoyListItemContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({flex:"1 1 auto",minWidth:0}),ListItemContent=react.forwardRef((function ListItemContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListItemContent"}),{component,className,children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props),classes=(0,composeClasses.Z)({root:["root"]},getListItemContentUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListItemContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListItemContent_ListItemContent=ListItemContent},"./node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItemDecorator_ListItemDecorator});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getListItemDecoratorUtilityClass(slot){return(0,className.d6)("MuiListItemDecorator",slot)}(0,className.sI)("MuiListItemDecorator",["root"]);var ListItemButtonOrientationContext=__webpack_require__("./node_modules/@mui/joy/ListItemButton/ListItemButtonOrientationContext.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","className","children","slots","slotProps"],ListItemDecoratorRoot=(0,styled.Z)("span",{name:"JoyListItemDecorator",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState})=>(0,esm_extends.Z)({boxSizing:"border-box",display:"inline-flex",alignItems:`var(--unstable_ListItemDecorator-alignItems, ${"horizontal"===ownerState.parentOrientation?"center":"initial"})`},"horizontal"===ownerState.parentOrientation?{minInlineSize:"var(--ListItemDecorator-size)",marginInlineEnd:"calc(-1 * var(--ListItem-gap))"}:{minBlockSize:"var(--ListItemDecorator-size)",justifyContent:"center",marginBlockEnd:"calc(-1 * var(--ListItem-gap))"}))),ListItemDecorator=react.forwardRef((function ListItemDecorator(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListItemDecorator"}),{component,className,children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),parentOrientation=react.useContext(ListItemButtonOrientationContext.Z),ownerState=(0,esm_extends.Z)({parentOrientation},props),classes=(0,composeClasses.Z)({root:["root"]},getListItemDecoratorUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListItemDecoratorRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListItemDecorator_ListItemDecorator=ListItemDecorator},"./blocks/card-social-suggestions/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardSocialSuggestionsraw_namespaceObject='import React from "react";\nimport AspectRatio from "@mui/joy/AspectRatio";\nimport Avatar from "@mui/joy/Avatar";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport List from "@mui/joy/List";\nimport ListDivider from "@mui/joy/ListDivider";\nimport ListItem from "@mui/joy/ListItem";\nimport ListItemContent from "@mui/joy/ListItemContent";\nimport ListItemDecorator from "@mui/joy/ListItemDecorator";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardSocialSuggestions() {\n  return (\n    <Card sx={{ borderRadius: "xl" }}>\n      <CardContent>\n        <div>\n          <Typography level="title-md" textColor="text.icon">\n            Suggestions\n          </Typography>\n        </div>\n        <List\n          sx={{\n            "--ListItem-paddingX": "0px",\n            "--ListItemDecorator-size": "64px",\n          }}\n        >\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://api.dicebear.com/7.x/micah/svg?seed=Rascal&backgroundColor=ffdfbf"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Jennifer Lawrence</Typography>\n              <Typography\n                level="body-sm"\n                color="success"\n                startDecorator={\n                  <AspectRatio\n                    variant="plain"\n                    ratio="1"\n                    sx={{\n                      width: 6,\n                      borderRadius: "50%",\n                      bgcolor: "success.400",\n                    }}\n                  />\n                }\n              >\n                Online\n              </Typography>\n            </ListItemContent>\n          </ListItem>\n          <ListDivider inset="startContent" />\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Tinkerbell&backgroundColor=d1d4f9"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Nicolas Cage</Typography>\n              <Typography level="body-sm" textColor="text.tertiary">\n                Last seen just now\n              </Typography>\n            </ListItemContent>\n          </ListItem>\n          <ListDivider inset="startContent" />\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Leo&backgroundColor=b6e3f4"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Amy Adams</Typography>\n              <Typography level="body-sm" textColor="text.tertiary">\n                Last seen 5 min ago\n              </Typography>\n            </ListItemContent>\n          </ListItem>\n        </List>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Social/Suggestions"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-social-suggestions\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardsocialsuggestions",children:"CardSocialSuggestions"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardSocialSuggestionsraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-social-suggestions/src/CardSocialSuggestions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Suggestions:()=>Suggestions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardSocialSuggestions_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-social-suggestions/usage.mdx"),AspectRatio=__webpack_require__("./node_modules/@mui/joy/AspectRatio/AspectRatio.js"),Avatar=__webpack_require__("./node_modules/@mui/joy/Avatar/Avatar.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),List=__webpack_require__("./node_modules/@mui/joy/List/List.js"),ListDivider=__webpack_require__("./node_modules/@mui/joy/ListDivider/ListDivider.js"),ListItem=__webpack_require__("./node_modules/@mui/joy/ListItem/ListItem.js"),ListItemContent=__webpack_require__("./node_modules/@mui/joy/ListItemContent/ListItemContent.js"),ListItemDecorator=__webpack_require__("./node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardSocialSuggestions(){return(0,jsx_runtime.jsx)(Card.Z,{sx:{borderRadius:"xl"},children:(0,jsx_runtime.jsxs)(CardContent.Z,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",textColor:"text.icon",children:"Suggestions"})}),(0,jsx_runtime.jsxs)(List.Z,{sx:{"--ListItem-paddingX":"0px","--ListItemDecorator-size":"64px"},children:[(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{variant:"plain",size:"lg",src:"https://api.dicebear.com/7.x/micah/svg?seed=Rascal&backgroundColor=ffdfbf"})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Jennifer Lawrence"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",color:"success",startDecorator:(0,jsx_runtime.jsx)(AspectRatio.Z,{variant:"plain",ratio:"1",sx:{width:6,borderRadius:"50%",bgcolor:"success.400"}}),children:"Online"})]})]}),(0,jsx_runtime.jsx)(ListDivider.Z,{inset:"startContent"}),(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{variant:"plain",size:"lg",src:"https://api.dicebear.com/7.x/notionists-neutral/svg?seed=Tinkerbell&backgroundColor=d1d4f9"})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Nicolas Cage"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",textColor:"text.tertiary",children:"Last seen just now"})]})]}),(0,jsx_runtime.jsx)(ListDivider.Z,{inset:"startContent"}),(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{variant:"plain",size:"lg",src:"https://api.dicebear.com/7.x/adventurer/svg?seed=Leo&backgroundColor=b6e3f4"})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Amy Adams"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",textColor:"text.tertiary",children:"Last seen 5 min ago"})]})]})]})]})})}CardSocialSuggestions.displayName="CardSocialSuggestions";const CardSocialSuggestions_stories={title:"Card/Social/Suggestions",component:CardSocialSuggestions,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Suggestions={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:400,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardSocialSuggestions,{})})};Suggestions.parameters={...Suggestions.parameters,docs:{...Suggestions.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 400,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardSocialSuggestions />\n    </div>\n}',...Suggestions.parameters?.docs?.source}}};const __namedExportsOrder=["Suggestions"]}}]);