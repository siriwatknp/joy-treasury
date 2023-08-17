---
to: ../blocks/<%=h.toNamePath(name)%>/src/index.ts
unless_exists: true
---
export { default as <%=h.toName(name)%> } from "./<%=h.toName(name)%>";
