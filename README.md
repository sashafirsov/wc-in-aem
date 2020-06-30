# Web Components integration into AEM 6.5 project

This project replaces webpack bundle in [AEM archetype](https://github.com/adobe/aem-project-archetype)
with CDN-capable build toolchain [polymer-cli](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli) 

# Browser-specific tuning
JS produces builds:  
* esm-unbundled for modern browsers with es6 modules
* es5-bundled for legacy browsers like IE
* esm-debug for troubleshooting and debugging

Back-end defines browser capabilities and uses the optimal for browser build. Which results in 2x smaller footprint and 
2x of JS load/execution speed. Fat arrow functions and classes would be used for modern browsers as is and simulated in legacy ones.

Legacy browsers also would be served with additional APIs to support your es6 code, Web Components, Web Animations, CSS variables.
The native es6 `import` in legacy browsers would be replaced with AMD API. 
  
# CDN modules reuse
Unlike WebPack-based AEM archetype code polymer-cli gives ability to reuse the modules across different applications 
and pages. Even if same module included multiple times on original page or dynamically, browser will load it only ONCE.


## Modules

The main parts of the template are:

* core: Java bundle containing all core functionality like OSGi services, listeners or schedulers, as well as component-related Java code such as servlets or request filters.
* ui.apps: contains the /apps (and /etc) parts of the project, ie JS&CSS clientlibs, components, templates, runmode specific configs as well as Hobbes-tests
* ui.content: contains sample content using the components from the ui.apps
* ui.tests: Java bundle containing JUnit tests that are executed server-side. This bundle is not to be deployed onto production.
* ui.launcher: contains glue code that deploys the ui.tests bundle (and dependent bundles) to the server and triggers the remote JUnit execution
* ui.frontend: an optional dedicated front-end build mechanism (Angular, React or general Webpack project)

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

# Windows for Linux (WSL) specifics
* WSL git, mvn in IntelliJ not supported, use Linux terminal instead 
* IP of wsl host


    ip addr
* 
     