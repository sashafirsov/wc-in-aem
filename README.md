# Web Components integration into AEM 6.5 project

This project replaces webpack bundle in [AEM archetype](https://github.com/adobe/aem-project-archetype)
with CDN-capable build toolchain [polymer-cli](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli) 

The set of Web Components is provided by [web-elements-loader](https://github.com/EPA-WG/web-elements-loader) 

# CDN+WebComponent advantages
* Code in JS loaded only once
* HTML DOM reuses template from Web Component instead of replicating as in JS-centric frameworks
* CSS properties eliminate the CSS rules replications by SASS
* Shadow DOM insulate component styles making safe to work without prefixes.
And so on.

# Browser-specific tuning
JS produces builds:  
* `esm-unbundled` for modern browsers with es6 modules
* `es5-bundled` for legacy browsers like IE
* `esm-debug` for troubleshooting and debugging

Back-end defines browser capabilities and uses the optimal for browser build. Which results in 2x smaller footprint and 
2x of JS load/execution speed. Fat arrow functions and classes would be used for modern browsers as is and simulated in legacy ones.

Legacy browsers also would be served with additional APIs to support your es6 code, Web Components, Web Animations, CSS variables.
The native es6 `import` in legacy browsers would be replaced with AMD API. 
  
# CDN modules reuse
Unlike WebPack-based AEM archetype code polymer-cli gives ability to reuse the modules across different applications 
and pages. Even if same module included multiple times on original page or dynamically, browser will load it only ONCE.
# How to insert Web Component into HTML
In AEM you could insert into component template ( [see sample](ui.apps/src/main/content/jcr_root/apps/wc-in-aem/components/helloworld/helloworld.html) )
```html
    <sly data-sly-use.WcInAem="suns.aem.core.models.WcInAem">
        ${WcInAem.html @ context='unsafe'}
    </sly>

    Declarative dependency loading via web-elemens-loader:
    <script type="module" src="/etc.clientlibs/wc-in-aem/clientlibs/clientlib-site/resources/build/esm-debug/src/web-elemens-loader.js"></script>
    Script could be set in page template so components would not need to use scripts later 
    <web-elemens-loader  id="webcomponentsElement" selection="
        @vaadin/vaadin-upload,
        ">
        <vaadin-upload accept=".pdf">
          <span slot="drop-label">Drop your favourite Novels here (PDF files only)</span>
        </vaadin-upload>
    </web-elemens-loader>
    
    Explicit dependency loading via SCRIPT tag:
    <script type="module" src="/etc.clientlibs/wc-in-aem/clientlibs/clientlib-site/resources/build/esm-unbundled/polymer3vaadin15-element.js"></script>
    <polymer3vaadin15-element prop1="abc" prop2="xyz"></polymer3vaadin15-element>
```
The `sly` tag calls [WcInAem.java](core/src/main/java/suns/aem/core/models/WcInAem.java) which
 picks necessary script according to user agent string from one of build targets
* `esm-unbundled` for current browsers
* `es5-bundled`  for other legacy browsers
* `esm-debug`   meant for debugging the uncompiled code. Triggered when URL has one of parameters: 
`wcmmode=disabled`, `debugClientLibs=true`, `debug=true`

# Screenshot of web components loaded declaratively
![Screenshot](screenshot1.png)

# Why CDN?
Deployed JS could be used from same domain using the relative path of with absolute URL from any another domain
making AEM a web server in CDN.


# Modules

The main parts of the template are:

* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps
* ui.tests: Java bundle containing JUnit tests that are executed server-side. This bundle is not to be deployed onto production.
* ui.launcher: contains glue code that deploys the ui.tests bundle (and dependent bundles) to the server and triggers the remote JUnit execution
* ui.frontend: dedicated front-end build mechanism (Web Components project)

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with

    mvn clean install -PautoInstallPackage

Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish

Or alternatively

    mvn clean install -PautoInstallPackage -Daem.port=4503

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle

## Testing

There are three levels of testing contained in the project:

* unit test in core: this show-cases classic unit testing of the code contained in the bundle. To test, execute:

    mvn clean test

* server-side integration tests: this allows to run unit-like tests in the AEM-environment, ie on the AEM server. To test, execute:

    mvn clean verify -PintegrationTests

* client-side Hobbes.js tests: JavaScript-based browser-side tests that verify browser-side behavior. To test:

    in the browser, open the page in 'Developer mode', open the left panel and switch to the 'Tests' tab and find the generated 'MyName Tests' and run them.

## ClientLibs

The frontend module is made available using an [AEM ClientLib](https://helpx.adobe.com/experience-manager/6-5/sites/developing/using/clientlibs.html). When executing the NPM build script, the app is built and the [`aem-clientlib-generator`](https://github.com/wcm-io-frontend/aem-clientlib-generator) package takes the resulting build output and transforms it into such a ClientLib.

A ClientLib will consist of the following files and directories:

- `css/`: CSS files which can be requested in the HTML
- `css.txt` (tells AEM the order and names of files in `css/` so they can be merged)
- `js/`: JavaScript files which can be requested in the HTML
- `js.txt` (tells AEM the order and names of files in `js/` so they can be merged
- `resources/`: Source maps, non-entrypoint code chunks (resulting from code splitting), static assets (e.g. icons), etc.

## Maven settings

The project comes with the auto-public repository configured. To setup the repository in your Maven settings, refer to:

    http://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html

# Development in AEM/IntelliJ

https://docs.adobe.com/content/help/en/experience-manager-65/developing/devtools/ht-intellij.html
 
