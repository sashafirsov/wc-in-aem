# Web Components
## \<polymer3vaadin15-element\>

http://localhost:4502/etc.clientlibs/wc-in-aem/clientlibs/clientlib-site/resources/build/esm-debug/demo/index.html
http://localhost:4502/etc.clientlibs/wc-in-aem/clientlibs/clientlib-site/resources/build/esm-unbundled/src/main/webpack/resources/images/WinTux32.png
## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). 
Run `polymer test` to run your application's test suite locally.

### tests debugging
`wct.conf.json` is configured for headless run. It could be removed to see it in live browser UI for tests debug with dev tools.
Chrome or Firefox browser should be installed in OS. 

<hr/>
# Frontend Build

## Features

* Webpack is replaced in favor of `polymer-cli`
* Sass/Scss is replaced with css variables and mixins.
* removed: Static webpack development server with built in proxy to a local instance of AEM

## Installation

1. Install [NodeJS](https://nodejs.org/en/download/) (v10+), globally. This will also install `npm`.
    it is not required for maven build which will load npm as own dependency.
2. Navigate to `ui.frontend` in your project and run `npm install`. (You must have run the archetype with `-DfrontendModule=general` to populate the ui.frontend folder)

## Usage

The following npm scripts drive the frontend workflow:

* `npm run dev` - Full build of client libraries with JS optimization disabled (tree shaking, etc) and source maps enabled and CSS optimization disabled.
* `npm run prod` - Full build of client libraries build with JS optimization enabled (tree shaking, etc), source maps disabled and CSS optimization enabled.
* `npm run start` - Starts a static development server for local development without dependencies on AEM.

### General

The ui.frontend module compiles the code under the `ui.frontend/src` folder and outputs the compiled CSS and JS, 
and any resources beneath a folder named `ui.frontend/dist`.

`clientlib.config.js` populates `dist/` into `ui.apps/src/main/content/jcr_root/apps/wc-in-aem/clientlibs/clientlib-site`

* **Site** - `site.js`, `site.css` and a `resources/` folder for layout dependent images and fonts are created in a `dist/clientlib-site` folder.
* **Dependencies** - `dependencies.js` and `dependencies.css` are created in a `dist/clientlib-dependencies` folder.

### JavaScript

* **Optimization** - for production builds, all JS that is not being used or
called is removed.

### CSS

* **Autoprefixing** - all CSS is run through a prefixer and any properties that require prefixing will automatically have those added in the CSS.
* **Optimization** - at post, all CSS is run through an optimizer (cssnano) which normalizes it according to the following default rules:
    * Reduces CSS calc expression wherever possible, ensuring both browser compatibility and compression.
    * Converts between equivalent length, time and angle values. Note that by default, length values are not converted.
    * Removes comments in and around rules, selectors & declarations.
    * Removes duplicated rules, at-rules and declarations. Note that this only works for exact duplicates.
    * Removes empty rules, media queries and rules with empty selectors, as they do not affect the output.
    * Merges adjacent rules by selectors and overlapping property/value pairs.
    * Ensures that only a single `@charset` is present in the CSS file and moves it to the top of the document.
    * Replaces the CSS initial keyword with the actual value, when the resulting output is smaller.
    * Compresses inline SVG definitions with SVGO.
* **Cleaning** - explicit clean task for wiping out the generated CSS, JS and Map files on demand.
* **Source Mapping** - development build only.

#### Notes

* Utilizes dev-only and prod-only webpack config files that share a common config file. This way the development and production settings can be tweaked independently.

### Client Library Generation

The second part of the ui.frontend module build process leverages the [aem-clientlib-generator](https://www.npmjs.com/package/aem-clientlib-generator) plugin to move the compiled CSS, JS and any resources into the `ui.apps` module. The aem-clientlib-generator configuration is defined in `clientlib.config.js`. The following client libraries are generated:

* **clientlib-site** - `ui.apps/src/main/content/jcr_root/apps/<app>/clientlibs/clientlib-site`
* **clientlib-dependencies** - `ui.apps/src/main/content/jcr_root/apps/<app>/clientlibs/clientlib-dependencies`

###  Page Inclusion

`clientlib-site` and `clientlib-dependencies` categories are included on pages via the Page Policy configuration as part of the default template. To view the policy, edit the **Content Page Template**  > **Page Information** > **Page Policy**.

The final inclusion of client libraries on the sites page is as follows:

```html

<HTML>
    <head>
        <link rel="stylesheet" href="clientlib-base.css" type="text/css">
        <script type="text/javascript" src="clientlib-dependencies.js"></script>
        <link rel="stylesheet" href="clientlib-dependencies.css" type="text/css">
        <link rel="stylesheet" href="clientlib-site.css" type="text/css">
    </head>
    <body>
        ....
        <script type="text/javascript" src="clientlib-site.js"></script>
        <script type="text/javascript" src="clientlib-base.js"></script>
    </body>
</HTML>
```

The above inclusion can of course be modified by updating the Page Policy and/or modifying the categories and embed properties of respective client libraries.

### Static Webpack Development Server

Included in the ui.frontend module is a [webpack-dev-server](https://github.com/webpack/webpack-dev-server) that provides live reloading for rapid front-end development outside of AEM. The setup leverages the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) to automatically inject CSS and JS compiled from the ui.frontend module into a static HTML template.

#### Important files

* `ui.frontend/webpack.dev.js` - This contains the configuration for the webpack-dev-serve and points to the html template to use. It also contains a proxy configuration to an AEM instance running on `localhost:4502`.
* `ui.frontend/src/main/webpack/static/index.html` - This is the static HTML that the server will run against. This allows a developer to make CSS/JS changes and see them immediately reflected in the markup. It is assumed that the markup placed in this file accurately reflects generated markup by AEM components. Note* that markup in this file does **not** get automatically synced with AEM component markup. This file also contains references to client libraries stored in AEM, like Core Component CSS and Responsive Grid CSS. The webpack development server is set up to proxy these CSS/JS includes from a local running AEM instance based on the configuration found in `ui.frontend/webpack.dev.js`.

#### Using

1. From within the root of the project run the command `mvn -PautoInstallSinglePackage clean install` to install the entire project to an AEM instance running at `localhost:4502`
2. Navigate inside the `ui.frontend` folder.
3. Run the following command `npm run start` to start the webpack dev server. Once started it should open a browser (localhost:8080 or the next available port).
4. You can now modify CSS, JS, SCSS, and TS files and see the changes immediately reflected in the webpack dev server.
