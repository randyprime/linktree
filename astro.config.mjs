import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {

    "/blog": "https://randyprime.beehiiv.com/",
    "/writings": "https://randyprime.beehiiv.com/",

    "/arcane": "https://s.team/a/2571560",
    "/changelog": "https://alpinegames.substack.com/",
    "/font": "https://randyprime.itch.io/randygg-monospace-font",

    "/kofi": "https://ko-fi.com/bigrando420",
    "/donate": "https://ko-fi.com/bigrando420",
    "/ko-fi": "https://ko-fi.com/bigrando420",
    "/fund": "https://ko-fi.com/bigrando420",

    "/learn": "https://private-community.carrd.co/",
    "/list": "https://randyprime.beehiiv.com",

    "/patreon": "https://www.patreon.com/baldrandy",
    "/patty": "https://www.patreon.com/baldrandy",

    "/playlists": "https://open.spotify.com/user/c5i6oure30sx891a24pnr19xn/playlists",
    

    "/terrafactor": "https://terrafactor.randy.gg",
    
    "/team": "mailto:contact@randy.gg",
    "/work": "mailto:contact@randy.gg",
    "/contact": "mailto:contact@randy.gg",

    "/res": "https://github.com/bigrando420/resources/wiki",

  },
  site: "https://randy.gg",
  integrations: [tailwind(), sitemap(), icon()],
});
