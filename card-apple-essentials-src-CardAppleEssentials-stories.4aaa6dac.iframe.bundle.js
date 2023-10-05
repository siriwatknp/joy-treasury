"use strict";(self.webpackChunkjoy_treasury=self.webpackChunkjoy_treasury||[]).push([[5209],{"./node_modules/@mui/joy/ListDivider/ListDivider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListDivider_ListDivider});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),capitalize=__webpack_require__("./node_modules/@mui/utils/esm/capitalize/capitalize.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),Divider=__webpack_require__("./node_modules/@mui/joy/Divider/Divider.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getListDividerUtilityClass(slot){return(0,className.d6)("MuiListDivider",slot)}(0,className.sI)("MuiListDivider",["root","insetGutter","insetStartDecorator","insetStartContent","horizontal","vertical"]);var RowListContext=__webpack_require__("./node_modules/@mui/joy/List/RowListContext.js"),ComponentListContext=__webpack_require__("./node_modules/@mui/joy/List/ComponentListContext.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","role","className","children","inset","orientation","slots","slotProps"],ListDividerRoot=(0,styled.Z)(Divider.n,{name:"JoyListDivider",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState})=>(0,esm_extends.Z)({},"context"===ownerState.inset&&{"--Divider-inset":"calc(-1 * var(--List-padding))"},ownerState.row&&(0,esm_extends.Z)({marginInline:"var(--ListDivider-gap)"},"gutter"===ownerState.inset&&{marginBlock:"var(--ListItem-paddingY)"},void 0===ownerState["data-first-child"]&&{marginInlineStart:"calc(var(--List-gap) + var(--ListDivider-gap))"}),!ownerState.row&&(0,esm_extends.Z)({},void 0===ownerState["data-first-child"]&&{marginBlockStart:"calc(var(--List-gap) + var(--ListDivider-gap))"},{marginBlockEnd:"var(--ListDivider-gap)"},"gutter"===ownerState.inset&&{marginInlineStart:"var(--ListItem-paddingLeft)",marginInlineEnd:"var(--ListItem-paddingRight)"},"startDecorator"===ownerState.inset&&{marginInlineStart:"var(--ListItem-paddingLeft)"},"startContent"===ownerState.inset&&{marginInlineStart:"calc(var(--ListItem-paddingLeft) + var(--ListItemDecorator-size))"})))),ListDivider=react.forwardRef((function ListDivider(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListDivider"}),row=react.useContext(RowListContext.Z),listComponent=react.useContext(ComponentListContext.Z),{component:componentProp,role:roleProp,className,children,inset="context",orientation:orientationProp,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),[listElement]=(null==listComponent?void 0:listComponent.split(":"))||["",""],component=componentProp||(listElement&&!listElement.match(/^(ul|ol|menu)$/)?"div":"li"),role=roleProp||("li"===component?"separator":void 0),orientation=orientationProp||(row?"vertical":"horizontal"),ownerState=(0,esm_extends.Z)({},props,{inset,row,orientation,component,role}),classes=(ownerState=>{const{orientation,inset}=ownerState,slots={root:["root",orientation,inset&&"context"!==inset&&`inset${(0,capitalize.Z)(inset)}`]};return(0,composeClasses.Z)(slots,getListDividerUtilityClass,{})})(ownerState),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListDividerRoot,externalForwardedProps,ownerState,additionalProps:(0,esm_extends.Z)({as:component,role},"separator"===role&&"vertical"===orientation&&{"aria-orientation":"vertical"})});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListDivider_ListDivider=ListDivider},"./node_modules/@mui/joy/ListItemButton/ListItemButtonOrientationContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext("horizontal")},"./node_modules/@mui/joy/ListItemContent/ListItemContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItemContent_ListItemContent});var esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getListItemContentUtilityClass(slot){return(0,className.d6)("MuiListItemContent",slot)}(0,className.sI)("MuiListItemContent",["root"]);var useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","className","children","slots","slotProps"],ListItemContentRoot=(0,styled.Z)("div",{name:"JoyListItemContent",slot:"Root",overridesResolver:(props,styles)=>styles.root})({flex:"1 1 auto",minWidth:0}),ListItemContent=react.forwardRef((function ListItemContent(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListItemContent"}),{component,className,children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props),classes=(0,composeClasses.Z)({root:["root"]},getListItemContentUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListItemContentRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListItemContent_ListItemContent=ListItemContent},"./node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItemDecorator_ListItemDecorator});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@mui/joy/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),styled=__webpack_require__("./node_modules/@mui/joy/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/joy/styles/useThemeProps.js"),className=__webpack_require__("./node_modules/@mui/joy/className/index.js");function getListItemDecoratorUtilityClass(slot){return(0,className.d6)("MuiListItemDecorator",slot)}(0,className.sI)("MuiListItemDecorator",["root"]);var ListItemButtonOrientationContext=__webpack_require__("./node_modules/@mui/joy/ListItemButton/ListItemButtonOrientationContext.js"),useSlot=__webpack_require__("./node_modules/@mui/joy/utils/useSlot.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["component","className","children","slots","slotProps"],ListItemDecoratorRoot=(0,styled.Z)("span",{name:"JoyListItemDecorator",slot:"Root",overridesResolver:(props,styles)=>styles.root})((({ownerState})=>(0,esm_extends.Z)({boxSizing:"border-box",display:"inline-flex",alignItems:`var(--unstable_ListItemDecorator-alignItems, ${"horizontal"===ownerState.parentOrientation?"center":"initial"})`},"horizontal"===ownerState.parentOrientation?{minInlineSize:"var(--ListItemDecorator-size)",marginInlineEnd:"calc(-1 * var(--ListItem-gap))"}:{minBlockSize:"var(--ListItemDecorator-size)",justifyContent:"center",marginBlockEnd:"calc(-1 * var(--ListItem-gap))"}))),ListItemDecorator=react.forwardRef((function ListItemDecorator(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"JoyListItemDecorator"}),{component,className,children,slots={},slotProps={}}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),parentOrientation=react.useContext(ListItemButtonOrientationContext.Z),ownerState=(0,esm_extends.Z)({parentOrientation},props),classes=(0,composeClasses.Z)({root:["root"]},getListItemDecoratorUtilityClass,{}),externalForwardedProps=(0,esm_extends.Z)({},other,{component,slots,slotProps}),[SlotRoot,rootProps]=(0,useSlot.Z)("root",{ref,className:(0,clsx.Z)(classes.root,className),elementType:ListItemDecoratorRoot,externalForwardedProps,ownerState});return(0,jsx_runtime.jsx)(SlotRoot,(0,esm_extends.Z)({},rootProps,{children}))})),ListItemDecorator_ListItemDecorator=ListItemDecorator},"./blocks/card-apple-essentials/usage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>usage});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const CardAppleEssentialsraw_namespaceObject='import React from "react";\nimport Avatar, { avatarClasses } from "@mui/joy/Avatar";\nimport Button from "@mui/joy/Button";\nimport Card from "@mui/joy/Card";\nimport CardContent from "@mui/joy/CardContent";\nimport List from "@mui/joy/List";\nimport ListDivider from "@mui/joy/ListDivider";\nimport ListItem from "@mui/joy/ListItem";\nimport ListItemContent from "@mui/joy/ListItemContent";\nimport ListItemDecorator from "@mui/joy/ListItemDecorator";\nimport SvgIcon from "@mui/joy/SvgIcon";\nimport Typography from "@mui/joy/Typography";\n\nexport default function CardAppleEssentials() {\n  return (\n    <Card sx={{ borderRadius: "xl", boxShadow: "xl" }}>\n      <div>\n        <Typography level="title-sm" textColor="text.icon">\n          ESSENTIALS\n        </Typography>\n        <Typography level="h3">Social networking 101</Typography>\n      </div>\n      <CardContent>\n        <List\n          sx={{\n            "--ListItem-paddingX": "0px",\n            "--ListItemDecorator-size": "64px",\n            [`& .${avatarClasses.root}`]: {\n              borderRadius: "md",\n              boxShadow: "inset 0 0 0 1px var(--joy-palette-divider)",\n            },\n          }}\n        >\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Reddit</Typography>\n              <Typography level="body-sm">\n                Trending Topics & Top News\n              </Typography>\n            </ListItemContent>\n            <Button\n              size="sm"\n              variant="soft"\n              color="neutral"\n              sx={{ borderRadius: "xl", color: "primary.500" }}\n            >\n              OPEN\n            </Button>\n          </ListItem>\n          <ListDivider inset="startContent" />\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">\n                LinkedIn: Job Search & News\n              </Typography>\n              <Typography level="body-sm">Network & Find Jobs F...</Typography>\n            </ListItemContent>\n            <Button\n              size="sm"\n              variant="soft"\n              color="neutral"\n              sx={{ borderRadius: "xl", color: "primary.500" }}\n            >\n              UPDATE\n            </Button>\n          </ListItem>\n          <ListDivider inset="startContent" />\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://www.motiongraphicplus.com/wp-content/uploads/2021/02/Clubhouse-logo.png"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">Clubhouse</Typography>\n              <Typography level="body-sm">Talk, listen, hand out</Typography>\n            </ListItemContent>\n            <Button\n              size="sm"\n              variant="plain"\n              color="neutral"\n              sx={{ borderRadius: "xl", color: "primary.500" }}\n            >\n              <SvgIcon fontSize="xl3" sx={{ color: "inherit" }}>\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  strokeWidth={1.5}\n                  stroke="currentColor"\n                >\n                  <path\n                    strokeLinecap="round"\n                    strokeLinejoin="round"\n                    d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"\n                  />\n                </svg>\n              </SvgIcon>\n            </Button>\n          </ListItem>\n          <ListDivider inset="startContent" />\n          <ListItem>\n            <ListItemDecorator>\n              <Avatar\n                variant="plain"\n                size="lg"\n                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg"\n              />\n            </ListItemDecorator>\n            <ListItemContent>\n              <Typography level="title-md">X</Typography>\n              <Typography level="body-sm">Blaze your glory!</Typography>\n            </ListItemContent>\n            <Button\n              size="sm"\n              variant="soft"\n              color="neutral"\n              sx={{ borderRadius: "xl", color: "primary.500" }}\n            >\n              UPDATE\n            </Button>\n          </ListItem>\n        </List>\n      </CardContent>\n    </Card>\n  );\n}\n';function _createMdxContent(props){const _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Card/Apple/Essentials"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cli",children:"CLI"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-sh",children:"npx joy-treasury@latest clone card-apple-essentials\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"cardappleessentials",children:"CardAppleEssentials"}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{code:CardAppleEssentialsraw_namespaceObject,language:"tsx"})]})}const usage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./.storybook/decorators/storyDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>storyDialog});var _mdx_js_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/joy/Box/Box.js"),_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/joy/IconButton/IconButton.js"),_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/joy/Modal/Modal.js"),_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/joy/ModalClose/ModalClose.js"),_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/joy/ModalDialog/ModalDialog.js"),_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/joy/Tooltip/Tooltip.js"),_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6P7RB4HF.mjs"),_storybook_theming__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@storybook/theming/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme={..._storybook_theming__WEBPACK_IMPORTED_MODULE_2__.np.light,color:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.$_,background:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.Oq,typography:_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.cp},defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.lO};function storyDialog(Component){return function storyDialogDecorator(Story,context){const[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Z,{size:"sm",title:"Show source code",placement:"top-start",sx:{zIndex:1e5},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_IconButton__WEBPACK_IMPORTED_MODULE_5__.ZP,{variant:"soft",sx:{position:"fixed",bottom:"1rem",left:"0.5rem",zIndex:99999,borderRadius:40},onClick:()=>setOpen(!0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_SvgIcon__WEBPACK_IMPORTED_MODULE_6__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Modal__WEBPACK_IMPORTED_MODULE_7__.ZP,{open,onClose:()=>setOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_joy_ModalDialog__WEBPACK_IMPORTED_MODULE_8__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_ModalClose__WEBPACK_IMPORTED_MODULE_9__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Typography__WEBPACK_IMPORTED_MODULE_10__.ZP,{level:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_11__.Z,{sx:{overflow:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_theming__WEBPACK_IMPORTED_MODULE_12__.f6,{theme:defaultTheme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_13__.Zo,{components:defaultComponents,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{})})})})]})})]})}}},"./blocks/card-apple-essentials/src/CardAppleEssentials.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Essentials:()=>Essentials,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardAppleEssentials_stories});__webpack_require__("./node_modules/react/index.js");var storyDialog=__webpack_require__("./.storybook/decorators/storyDialog.tsx"),usage=__webpack_require__("./blocks/card-apple-essentials/usage.mdx"),avatarClasses=__webpack_require__("./node_modules/@mui/joy/Avatar/avatarClasses.js"),Avatar=__webpack_require__("./node_modules/@mui/joy/Avatar/Avatar.js"),Button=__webpack_require__("./node_modules/@mui/joy/Button/Button.js"),Card=__webpack_require__("./node_modules/@mui/joy/Card/Card.js"),CardContent=__webpack_require__("./node_modules/@mui/joy/CardContent/CardContent.js"),List=__webpack_require__("./node_modules/@mui/joy/List/List.js"),ListDivider=__webpack_require__("./node_modules/@mui/joy/ListDivider/ListDivider.js"),ListItem=__webpack_require__("./node_modules/@mui/joy/ListItem/ListItem.js"),ListItemContent=__webpack_require__("./node_modules/@mui/joy/ListItemContent/ListItemContent.js"),ListItemDecorator=__webpack_require__("./node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js"),SvgIcon=__webpack_require__("./node_modules/@mui/joy/SvgIcon/SvgIcon.js"),Typography=__webpack_require__("./node_modules/@mui/joy/Typography/Typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function CardAppleEssentials(){return(0,jsx_runtime.jsxs)(Card.Z,{sx:{borderRadius:"xl",boxShadow:"xl"},children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-sm",textColor:"text.icon",children:"ESSENTIALS"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"h3",children:"Social networking 101"})]}),(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsxs)(List.Z,{sx:{"--ListItem-paddingX":"0px","--ListItemDecorator-size":"64px",[`& .${avatarClasses.Z.root}`]:{borderRadius:"md",boxShadow:"inset 0 0 0 1px var(--joy-palette-divider)"}},children:[(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{variant:"plain",size:"lg",src:"https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png"})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Reddit"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Trending Topics & Top News"})]}),(0,jsx_runtime.jsx)(Button.Z,{size:"sm",variant:"soft",color:"neutral",sx:{borderRadius:"xl",color:"primary.500"},children:"OPEN"})]}),(0,jsx_runtime.jsx)(ListDivider.Z,{inset:"startContent"}),(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{variant:"plain",size:"lg",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"LinkedIn: Job Search & News"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Network & Find Jobs F..."})]}),(0,jsx_runtime.jsx)(Button.Z,{size:"sm",variant:"soft",color:"neutral",sx:{borderRadius:"xl",color:"primary.500"},children:"UPDATE"})]}),(0,jsx_runtime.jsx)(ListDivider.Z,{inset:"startContent"}),(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{variant:"plain",size:"lg",src:"https://www.motiongraphicplus.com/wp-content/uploads/2021/02/Clubhouse-logo.png"})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"Clubhouse"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Talk, listen, hand out"})]}),(0,jsx_runtime.jsx)(Button.Z,{size:"sm",variant:"plain",color:"neutral",sx:{borderRadius:"xl",color:"primary.500"},children:(0,jsx_runtime.jsx)(SvgIcon.Z,{fontSize:"xl3",sx:{color:"inherit"},children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"})})})})]}),(0,jsx_runtime.jsx)(ListDivider.Z,{inset:"startContent"}),(0,jsx_runtime.jsxs)(ListItem.Z,{children:[(0,jsx_runtime.jsx)(ListItemDecorator.Z,{children:(0,jsx_runtime.jsx)(Avatar.Z,{variant:"plain",size:"lg",src:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/x_twitter-sixteen_nine.jpg"})}),(0,jsx_runtime.jsxs)(ListItemContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.ZP,{level:"title-md",children:"X"}),(0,jsx_runtime.jsx)(Typography.ZP,{level:"body-sm",children:"Blaze your glory!"})]}),(0,jsx_runtime.jsx)(Button.Z,{size:"sm",variant:"soft",color:"neutral",sx:{borderRadius:"xl",color:"primary.500"},children:"UPDATE"})]})]})})]})}CardAppleEssentials.displayName="CardAppleEssentials";const CardAppleEssentials_stories={title:"Card/Apple/Essentials",component:CardAppleEssentials,parameters:{layout:"centered"},decorators:[(0,storyDialog.Z)(usage.default)]},Essentials={render:()=>(0,jsx_runtime.jsx)("div",{style:{width:400,padding:20,maxWidth:"100%",resize:"horizontal",overflow:"auto"},children:(0,jsx_runtime.jsx)(CardAppleEssentials,{})})};Essentials.parameters={...Essentials.parameters,docs:{...Essentials.parameters?.docs,source:{originalSource:'{\n  render: () => <div style={{\n    width: 400,\n    padding: 20,\n    maxWidth: "100%",\n    resize: "horizontal",\n    overflow: "auto"\n  }}>\n      <CardAppleEssentials />\n    </div>\n}',...Essentials.parameters?.docs?.source}}};const __namedExportsOrder=["Essentials"]}}]);