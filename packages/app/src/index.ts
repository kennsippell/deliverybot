import * as path from "path";
export { apps, main, slack, jobs } from "./apps";
export { load, logger } from "@deliverybot/core";

const pkg = require(path.join(__dirname, "..", "package.json"));
export const info: { [k: string]: string } = {
  version: pkg.version,
  homepage: "https://deliverybot.app.medicmobile.org/",
  blog: "https://medic.org/stories/",
  integrations: "https://deliverybot.app.medicmobile.org/integrations/",
  status: "https://deliverybot.app.medicmobile.org/status/",
  community: "https://forum.communityhealthtoolkit.org/",
  documentation: "https://docs.communityhealthtoolkit.org/",
  support: "app-services@medic.org",
  github: "https://github.com/medic",
  terms: "https://twitter.com/Medic",
  privacy: "https://docs.google.com/document/d/1MaI1rgYMNyCZF2eEjBuvnBDoCYHDKlx4k_N5pkDiWu8/edit",
  install: "https://deliverybot.app.medicmobile.org",
};
