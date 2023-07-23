import { addons } from "@storybook/addons";
import {
  STORY_CHANGED,
  STORY_ERRORED,
  STORY_MISSING,
} from "@storybook/core-events";

import ReactGA from "react-ga4";

// need to use .default because of ES build (type="module" in package.json)
type GA4 = typeof ReactGA & { default: typeof ReactGA };

addons.register("google-analytics", (api) => {
  (ReactGA as GA4).default.initialize("G-B662RPJSSQ");

  api.on(STORY_CHANGED, () => {
    const { path } = api.getUrlState();
    (ReactGA as GA4).default.send({ hitType: "pageview", page: path });
  });
  api.on(STORY_ERRORED, ({ description }: { description: string }) => {
    (ReactGA as GA4).default.event("exception", {
      description,
      fatal: true,
    });
  });
  api.on(STORY_MISSING, (id: string) => {
    (ReactGA as GA4).default.event("exception", {
      description: `attempted to render ${id}, but it is missing`,
      fatal: false,
    });
  });
});
