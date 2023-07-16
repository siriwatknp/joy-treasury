import{j as o}from"./jsx-runtime-94f6e698.js";import{m as $e,n as q,o as G,s as _,c as Y,d as Re,p as L,q as ke,u as Pe,a as _e,f as R,g as K,i as Q,j as M,A as ze,k,T as x,S as N,C as X,l as Be}from"./SvgIcon-468bcba3.js";import{s as Ie,u as Ne,_ as P,T as we,d as Se,C as Te,g as Z,a as ee,c as I}from"./identifier-e2153ba1.js";import{_ as s}from"./extends-52c66f6c.js";import{r as d}from"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const Fe=["className","component"];function Le(r={}){const{themeId:e,defaultTheme:l,defaultClassName:t="MuiBox-root",generateClassName:a}=r,i=$e("div",{shouldForwardProp:n=>n!=="theme"&&n!=="sx"&&n!=="as"})(Ie);return d.forwardRef(function(u,g){const p=Ne(l),h=q(u),{className:v,component:f="div"}=h,C=P(h,Fe);return o.jsx(i,s({as:f,ref:g,className:G(v,a?a(t):t),theme:e&&p[e]||p},C))})}const Me=Le({themeId:we,defaultTheme:Se,defaultClassName:"MuiBox-root",generateClassName:Te.generate}),Ee=Me;function Ve(r){return ee("MuiLink",r)}const We=Z("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","h5","h6","body1","body2","body3","startDecorator","endDecorator"]),E=We,Ae=["color","textColor","variant"],He=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],Je=r=>{const{level:e,color:l,variant:t,underline:a,focusVisible:i,disabled:c}=r,n={root:["root",l&&`color${I(l)}`,c&&"disabled",i&&"focusVisible",e,a&&`underline${I(a)}`,t&&`variant${I(t)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return K(n,Ve,{})},Ue=_("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(r,e)=>e.startDecorator})(({ownerState:r})=>{var e;return s({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},typeof r.startDecorator!="string"&&(r.alignItems==="flex-start"||((e=r.sx)==null?void 0:e.alignItems)==="flex-start")&&{marginTop:"2px"})}),Oe=_("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(r,e)=>e.endDecorator})(({ownerState:r})=>{var e;return s({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},typeof r.startDecorator!="string"&&(r.alignItems==="flex-start"||((e=r.sx)==null?void 0:e.alignItems)==="flex-start")&&{marginTop:"2px"})}),qe=_("a",{name:"JoyLink",slot:"Root",overridesResolver:(r,e)=>e.root})(({theme:r,ownerState:e})=>{var l,t,a,i,c,n,u;return[s({"--Icon-fontSize":"1.25em"},e.level&&e.level!=="inherit"&&r.typography[e.level],e.level==="inherit"&&{fontSize:"inherit",fontFamily:"inherit",lineHeight:"inherit"},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecorationLine:"underline"}},e.underline==="always"&&{textDecoration:"underline"},e.startDecorator&&{verticalAlign:"bottom"},{display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:r.vars.radius.xs,padding:0,cursor:"pointer"},e.color!=="context"&&{textDecorationColor:`rgba(${(l=r.vars.palette[e.color])==null?void 0:l.mainChannel} / var(--Link-underlineOpacity, 0.72))`},e.variant?s({paddingBlock:"min(0.15em, 4px)",paddingInline:"0.375em"},!e.nesting&&{marginInline:"-0.375em"}):s({},e.color!=="context"&&{color:`rgba(${(t=r.vars.palette[e.color])==null?void 0:t.mainChannel} / 1)`},{[`&.${E.disabled}`]:s({pointerEvents:"none"},e.color!=="context"&&{color:`rgba(${(a=r.vars.palette[e.color])==null?void 0:a.mainChannel} / 0.6)`})}),{userSelect:"none",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},e.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"},[`${r.focus.selector}`]:{"&::after":r.focus.default}}:{position:"relative",[r.focus.selector]:r.focus.default}),e.variant&&s({},(i=r.variants[e.variant])==null?void 0:i[e.color],{"&:hover":(c=r.variants[`${e.variant}Hover`])==null?void 0:c[e.color],"&:active":(n=r.variants[`${e.variant}Active`])==null?void 0:n[e.color],[`&.${E.disabled}`]:(u=r.variants[`${e.variant}Disabled`])==null?void 0:u[e.color]})]}),Ge=d.forwardRef(function(e,l){const t=Y({props:e,name:"JoyLink"}),{color:a="primary",textColor:i,variant:c}=t,n=P(t,Ae),{getColor:u}=Re(c),g=u(e.color,a),p=d.useContext(L),h=d.useContext(ke),v=q(s({},n,{color:i})),{children:f,disabled:C=!1,onBlur:m,onFocus:y,level:se="body1",overlay:te=!1,underline:ne="hover",endDecorator:w,startDecorator:S,component:ae,slots:le={},slotProps:ie={}}=v,ce=P(v,He),de=p||h?e.level||"inherit":se,{isFocusVisibleRef:T,onBlur:ue,onFocus:pe,ref:xe}=Pe(),[ve,F]=d.useState(!1),he=_e(l,xe),me=b=>{ue(b),T.current===!1&&F(!1),m&&m(b)},ge=b=>{pe(b),T.current===!0&&F(!0),y&&y(b)},j=s({},v,{color:g,disabled:C,focusVisible:ve,underline:ne,variant:c,level:de,overlay:te,nesting:p}),z=Je(j),B=s({},ce,{component:ae,slots:le,slotProps:ie}),[fe,Ce]=R("root",{additionalProps:{onBlur:me,onFocus:ge},ref:he,className:z.root,elementType:qe,externalForwardedProps:B,ownerState:j}),[be,ye]=R("startDecorator",{className:z.startDecorator,elementType:Ue,externalForwardedProps:B,ownerState:j}),[je,De]=R("endDecorator",{className:z.endDecorator,elementType:Oe,externalForwardedProps:B,ownerState:j});return o.jsx(L.Provider,{value:!0,children:o.jsxs(fe,s({},Ce,{children:[S&&o.jsx(be,s({},ye,{children:S})),f,w&&o.jsx(je,s({},De,{children:w}))]}))})}),oe=Ge;function re(){return o.jsxs(Q,{size:"lg",sx:{borderRadius:0,"--Card-radius":0,boxShadow:"xl"},children:[o.jsx(M,{children:o.jsx(ze,{ratio:"7/5",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1470214203634-e436a8848e23"})})}),o.jsxs(k,{orientation:"horizontal",sx:{alignItems:"center"},children:[o.jsxs(k,{sx:{gap:1,flex:"max-content"},children:[o.jsx(x,{level:"h2",fontSize:"xl2",children:"Blissful Haven Spa"}),o.jsx(x,{level:"body2",fontWeight:"lg",startDecorator:o.jsx(N,{children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),children:"Mystical valleys of Eldoria"})]}),o.jsx(Ee,{sx:{flex:"auto",textAlign:"center"},children:o.jsx(X,{color:"success",thickness:2,determinate:!0,value:91,sx:{"--CircularProgress-size":"52px",fontSize:"sm"},children:"9.1"})})]}),o.jsx(x,{level:"body2",sx:{my:2},children:"Rejuvenate Your Senses in a Serene Oasis of Tranquility, where expert therapists pamper you with indulgent treatments, leaving you refreshed, revitalized, and radiating with inner harmony."}),o.jsx(M,{sx:{bgcolor:"background.level1",borderTop:"1px solid",borderColor:"divider"},children:o.jsxs(Be,{sx:{justifyContent:"space-between"},children:[o.jsxs(x,{level:"body3",children:["From ",o.jsx(x,{color:"success",children:"$ 2,500"})," for 8 nights"]}),o.jsx(oe,{level:"body2",component:"button",endDecorator:o.jsx(N,{children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"})})}),children:"Book now"})]})})]})}function Ye(r){return ee("MuiCardCover",r)}Z("MuiCardCover",["root"]);const Ke=["className","component","children","slots","slotProps"],Qe=()=>K({root:["root"]},Ye,{}),Xe=_("div",{name:"JoyCardCover",slot:"Root",overridesResolver:(r,e)=>e.root})({position:"absolute",zIndex:0,top:0,left:0,right:0,bottom:0,borderRadius:"var(--CardCover-radius)","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",objectFit:"cover",boxSizing:"border-box",borderRadius:"var(--CardCover-radius)",margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:"cover"}}}),Ze=d.forwardRef(function(e,l){const t=Y({props:e,name:"JoyCardCover"}),{className:a,component:i="div",children:c,slots:n={},slotProps:u={}}=t,g=P(t,Ke),p=s({},t,{component:i}),h=Qe(),v=s({},g,{component:i,slots:n,slotProps:u}),[f,C]=R("root",{ref:l,className:G(h.root,a),elementType:Xe,externalForwardedProps:v,ownerState:p});return o.jsx(f,s({},C,{children:d.Children.map(c,(m,y)=>y===0&&d.isValidElement(m)?d.cloneElement(m,{"data-first-child":""}):m)}))}),V=Ze;function eo(){return o.jsxs(Q,{variant:"solid",invertedColors:!0,size:"lg",sx:{borderRadius:0,"--Card-radius":0,boxShadow:"xl",width:"100%",height:"100%"},children:[o.jsx(V,{children:o.jsx("img",{src:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb"})}),o.jsx(V,{sx:{background:"linear-gradient(5deg, rgba(0,0,0,0.4), rgba(0,0,0,0) 25%),linear-gradient(15deg, rgba(0,0,0,0.8), rgba(0,0,0,0) 40%)"}}),o.jsxs(k,{sx:{justifyContent:"flex-end",gap:1},children:[o.jsx(x,{level:"h2",fontSize:"xl4",sx:{textShadow:"0 0 0.25em rgba(0 0 0 / 0.5)"},children:o.jsx(oe,{href:"#",overlay:!0,textColor:"inherit",underline:"none",children:"Blissful Haven Spa"})}),o.jsx(x,{level:"body2",textColor:"text.tertiary",fontWeight:"lg",startDecorator:o.jsx(N,{children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})}),children:"Mystical valleys of Eldoria"})]}),o.jsxs(k,{orientation:"horizontal",sx:{flex:"none",alignItems:"center",justifyContent:"space-between"},children:[o.jsxs(x,{textColor:"text.secondary",children:["From ",o.jsx("b",{children:"$ 2,500"})," for 8 nights"]}),o.jsx(X,{thickness:2,determinate:!0,value:91,sx:{"--CircularProgress-size":"52px",fontSize:"sm"},children:"9.1"})]})]})}const lo={title:"Card/News/Spa",component:re,parameters:{layout:"centered"}},D={render:()=>o.jsx("div",{style:{width:400,maxWidth:"100%"},children:o.jsx(re,{})})},$={render:()=>o.jsx("div",{style:{width:400,maxWidth:"100%",height:600},children:o.jsx(eo,{})})};var W,A,H;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    maxWidth: "100%"
  }}>
      <CardNewsSpa />
    </div>
}`,...(H=(A=D.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,U,O;$.parameters={...$.parameters,docs:{...(J=$.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400,
    maxWidth: "100%",
    height: 600
  }}>
      <CardNewsSpaCover />
    </div>
}`,...(O=(U=$.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const io=["Spa","SpaCover"];export{D as Spa,$ as SpaCover,io as __namedExportsOrder,lo as default};
//# sourceMappingURL=CardNewsSpa.stories-f3185cf7.js.map
