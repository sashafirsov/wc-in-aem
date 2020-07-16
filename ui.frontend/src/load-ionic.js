import LoadCollection from './load-collection';
/**
 * `load-material-wc`
 * Container of  material Web Components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/material-web-components-demo.html
 */
class LoadIonic extends LoadCollection
{

    static get is(){ return 'load-ionic'}
    docs(pkg){ return 'https://ionicframework.com/docs' }
    isDisabledByDefault(pkg){}
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        // init(x=>import("@stencil/core/"                         )),
        init(x=>import("@ionic/core/dist/ionic/ionic.esm"       )),
        // init(x=>import("@ionic/core/dist/esm/ionic.mjs"         )),
        ]
    }

}

window.customElements.define( LoadIonic.is, LoadIonic);
