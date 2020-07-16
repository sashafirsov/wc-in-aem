import LoadCollection from './load-collection';
/**
 * `load-material-wc`
 * Container of  material Web Components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/material-web-components-demo.html
 */
class LoadMaterialWC extends LoadCollection
{

    static get is(){ return 'load-mwc'}
    docs(pkg){ let n=pkg.name.split('/').pop(); return `https://github.com/vaadin/${ n }` }
    isDisabledByDefault(pkg)
    {
        // return  [   '@vaadin/vaadin/vaadin'
        //         ].includes(pkg)
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import("@material/mwc-icon/mwc-icon"                )),
        init(x=>import("@material/mwc-button/mwc-button"            )),
        init(x=>import("@material/mwc-checkbox"                     )),
        init(x=>import("@material/mwc-formfield"                    )),
        init(x=>import("@material/mwc-dialog"                       )),
        init(x=>import("@material/mwc-ripple"                       )),
        init(x=>import("@material/mwc-textfield"                    )),
        init(x=>import("@material/mwc-drawer"                       )),
        init(x=>import("@material/mwc-top-app-bar"                  )),
        init(x=>import("@material/mwc-icon-button"                  )),
        init(x=>import("@material/mwc-fab"                          )),
        init(x=>import("@material/mwc-formfield"                    )),
        init(x=>import("@material/mwc-slider"                       )),
        init(x=>import("@material/mwc-radio"                        )),
        init(x=>import("@material/mwc-switch"                       )),
        init(x=>import("@material/mwc-icon-button-toggle"           )),
        init(x=>import("@material/mwc-linear-progress"              )),
        init(x=>import("@material/mwc-list"                         )),
        init(x=>import("@material/mwc-list/mwc-list-item"           )),
        init(x=>import("@material/mwc-list/mwc-check-list-item"     )),
        init(x=>import("@material/mwc-list/mwc-list-adapter"        )),
        init(x=>import("@material/mwc-list/mwc-radio-list-item"     )),
        init(x=>import("@material/mwc-menu"                         )),
        init(x=>import("@material/mwc-select"                       )),
        init(x=>import("@material/mwc-textfield"                    )),
        init(x=>import("@material/mwc-slider"                       )),
        init(x=>import("@material/mwc-snackbar"                     )),
        init(x=>import("@material/mwc-switch"                       )),
        init(x=>import("@material/mwc-tab"                          )),
        init(x=>import("@material/mwc-tab-bar"                      )),
        init(x=>import("@material/mwc-textarea"                     )),
        init(x=>import("@material/mwc-top-app-bar"                  )),
        init(x=>import("@material/mwc-top-app-bar-fixed"            )),
        ]
    }

}

window.customElements.define( LoadMaterialWC.is, LoadMaterialWC);
