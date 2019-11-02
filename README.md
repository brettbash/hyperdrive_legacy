# Hyperdrive

Fire up a new Statamic site in Hyperdrive! 🚀

## Features

-   [Tailwind](https://tailwindcss.com/) CSS Framework & Sass for the styling.
-   Modern JavaScript using libraries such as [GreenSock](https://greensock.com/) & [ScrollMagic](https://scrollmagic.io/)
-   [Vue.js](http://vuejs.org) capabilities ready to go!
-   [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) for compiling assets and concatenating and minifying files

## Setup

-   Clone into the site/themes folder
-   Add [Statamic Mix](https://statamic.com/marketplace/addons/statamic-mix) to site/addons

## Theme development

-   `npm install` to install dependencies
-   Update `webpack.mix.js` with your local dev URL

### Build commands

-   `npm watch` — Compile assets when file changes are made, start Browsersync session
-   `npm dev` — Compile and optimize the files in your assets directory
-   `npm run production` — Compile assets for production

### Partials Structures

The partials for Antlers, JS, and Sass all have sub-folders for better organization and abstraction.

-   _Components_ - The smallest reusable item, such as a button or post item card.
-   _Module_ - This is for a whole layout section that can contain multiple smaller components. For an example: Hero, CTA
-   _Block_ - Blocks are the same type of items as the modules, just that these are meant to be Flex Blocks.
