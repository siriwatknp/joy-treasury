---
to: ../blocks/<%=h.toNamePath(name)%>/usage.mdx
unless_exists: true
---
import { Meta, Source } from "@storybook/blocks";
import raw from "./src/<%=h.toName(name)%>?raw";

<Meta title="<%=h.getFirstPascal(name)%>/<%=h.getSecondPascal(name)%>/<%=h.getThirdPascal(name)%>" />

## CLI

```sh
npx joy-treasury@latest clone <%=name%>
```

## <%=h.toName(name)%>

<Source code={raw} language="tsx" />
