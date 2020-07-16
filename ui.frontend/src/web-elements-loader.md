# web-elements-loader
 web component to lazy load dependencies from 
 [ESM/mjs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and 
 [AMD](https://requirejs.org/docs/whyamd.html) 
formatted CDN bundle for Web Components with Polymer + Vaadin Elements, jQuery + xml4jQuery. 

# Demo
* [Paper Elements](https://cdn.xml4jquery.com/web-elements-loader/build/esm-unbundled/demo/paper-elements-demo.html) 
( [legacy browsers](https://cdn.xml4jquery.com/web-elements-loader/build/es5-bundled/demo/paper-elements-demo.html) )

# Use
TODO

# API 
## Attributes
* `selection` comma separated list of modules for load lazily. Only modules compiled with this `web-elements-loader` 
project could be used. UI allows to see several sets of modules and load by checking the box against module name. 
* `visible` enables UI for development. If attribute is not presented, web component UI is not rendered ( production use )
* `disabled` makes UI read-only, useful for non-developer role in CMS.
## methods
* `importDependencies()` loads the selected modules, return Promise
## events
* `"load"` Custom Event is fired when all modules are loaded.
