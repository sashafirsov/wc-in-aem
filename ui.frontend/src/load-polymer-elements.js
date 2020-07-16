import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadPolymerElements extends LoadCollection
{

    static get is(){ return 'load-polymer-elements'}

    isDisabledByDefault(pkg)
    {   return true
        // return  [   '@polymer/paper-drawer-panel'
        //         ].includes(pkg)
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import( "./wel-css-query.js"                                                  )),
        init(x=>import( "./polymer-element.js"                                                  )),
        init(x=>import( "@polymer/app-layout/app-layout"                                        )),
        init(x=>import( "@polymer/paper-tooltip"                                                )),
        init(x=>import( "@polymer/paper-badge"                                                  )),
        init(x=>import( "@polymer/app-layout/app-box/app-box"                                   )),
        init(x=>import( "@polymer/app-layout/app-drawer/app-drawer"                             )),
        init(x=>import( "@polymer/app-layout/app-drawer-layout/app-drawer-layout"               )),
        init(x=>import( "@polymer/app-layout/app-grid/app-grid-style"                           )),
        init(x=>import( "@polymer/app-layout/app-header/app-header"                             )),
        init(x=>import( "@polymer/app-layout/app-header-layout/app-header-layout"               )),
        init(x=>import( "@polymer/app-layout/app-layout-behavior/app-layout-behavior"           )),
        init(x=>import( "@polymer/app-layout/app-scroll-effects/app-scroll-effects"             )),
        init(x=>import( "@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior"    )),
        init(x=>import( "@polymer/app-layout/app-toolbar/app-toolbar"                           )),
        init(x=>import( "@polymer/iron-iconset-svg"                                             )),
        init(x=>import( "@polymer/app-route/app-route"                                          )),
        init(x=>import( "@polymer/app-route/app-location"                                       )),
        init(x=>import( "@polymer/app-route/app-route-converter"                                )),
        init(x=>import( "@polymer/app-route/app-route-converter-behavior"                       )),
        init(x=>import( "@polymer/app-storage/app-storage-behavior"                             )),
        init(x=>import( "@polymer/app-storage/app-network-status-behavior"                      )),
        init(x=>import( "@polymer/app-storage/app-localstorage/app-localstorage-document"       )),
        init(x=>import( "@polymer/app-storage/app-indexeddb-mirror/common-worker"               )),
        init(x=>import( "@polymer/app-storage/app-indexeddb-mirror/common-worker-scope"         )),
        init(x=>import( "@polymer/app-storage/app-indexeddb-mirror/app-indexeddb-mirror"        )),
        init(x=>import( "@polymer/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-worker" )),
        init(x=>import( "@polymer/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-client" )),

        // todo full collection
        ]
    }
}

window.customElements.define( LoadPolymerElements.is, LoadPolymerElements);
