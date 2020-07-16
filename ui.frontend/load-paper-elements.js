import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadPaperElement extends LoadCollection
{

    static get is(){ return 'load-paper-elements'}

    isDisabledByDefault(pkg)
    {
        return  [   '@polymer/paper-drawer-panel'
                ].includes(pkg)
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import( "@polymer/paper-styles/paper-styles"                              )),
        init(x=>import( "@polymer/paper-styles/default-theme"                              )),
        init(x=>import( "@polymer/paper-styles/shadow"                              )),
        init(x=>import( "@polymer/paper-styles/typography"                              )),
        init(x=>import( "@polymer/paper-styles/color"                              )),
        init(x=>import( "@polymer/paper-styles/demo-pages"                              )),

        init(x=>import( "@polymer/paper-badge"                              )),
        init(x=>import( "@polymer/paper-button"                             )),
        init(x=>import( "@polymer/paper-card"                               )),
        init(x=>import( "@polymer/paper-checkbox"                           )),

        init(x=>import( "@polymer/paper-dialog"                                             )),
        init(x=>import( "@polymer/paper-dialog-behavior/paper-dialog-behavior"              )),
        init(x=>import( "@polymer/paper-dialog-behavior/paper-dialog-shared-styles"         )),
        init(x=>import( "@polymer/paper-dialog-scrollable"                                  )),

        init(x=>import( "@polymer/paper-drawer-panel"                                       )),

        init(x=>import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles"    )),
        init(x=>import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-icons"            )),
        init(x=>import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-light"            )),
        init(x=>import( "@polymer/paper-dropdown-menu/paper-dropdown-menu"                  )),

        init(x=>import( "@polymer/paper-fab"                                )),
        init(x=>import( "@polymer/paper-header-panel"                       )),
        init(x=>import( "@polymer/paper-icon-button"                        )),
        init(x=>import( "@polymer/paper-icon-button/paper-icon-button"      )),
        init(x=>import( "@polymer/paper-icon-button/paper-icon-button-light")),

        init(x=>import( "@polymer/paper-input/paper-input"                  )),
        // init(x=>import( "@polymer/paper-input/paper-input-container"        )),
        init(x=>import( "@polymer/paper-input/paper-input-behavior"         )),
        init(x=>import( "@polymer/paper-input/paper-input-addon-behavior"   )),
        init(x=>import( "@polymer/paper-input/paper-input-char-counter"     )),
        init(x=>import( "@polymer/paper-input/paper-textarea"               )),
        init(x=>import( "@polymer/paper-input/paper-input-error"            )),

        init(x=>import( "@polymer/paper-item/paper-item"                    )),
        init(x=>import( "@polymer/paper-item/paper-item-body"               )),
        init(x=>import( "@polymer/paper-item/paper-icon-item"               )),
        init(x=>import( "@polymer/paper-listbox"                            )),
        init(x=>import( "@polymer/paper-material"                           )),
        // init(x=>import( "@polymer/paper-menu"                               )),
        init(x=>import( "@polymer/paper-menu-button"                        )),
        init(x=>import( "@polymer/paper-progress"                           )),
        init(x=>import( "@polymer/paper-radio-button"                       )),
        init(x=>import( "@polymer/paper-radio-group"                        )),
        init(x=>import( "@polymer/paper-ripple"                             )),
        init(x=>import( "@polymer/paper-scroll-header-panel"                )),
        init(x=>import( "@polymer/paper-slider"                             )),

        init(x=>import( "@polymer/paper-spinner/paper-spinner-behavior"     )),
        init(x=>import( "@polymer/paper-spinner/paper-spinner-lite"         )),
        init(x=>import( "@polymer/paper-spinner/paper-spinner-styles"       )),
        init(x=>import( "@polymer/paper-spinner/paper-spinner"              )),

        init(x=>import( "@polymer/paper-styles/default-theme"               )),
        init(x=>import( "@polymer/paper-styles/paper-styles"                )),
        init(x=>import( "@polymer/paper-styles/paper-styles-classes"        )),
        init(x=>import( "@polymer/paper-styles/shadow"                      )),
        init(x=>import( "@polymer/paper-styles/color"                       )),
        init(x=>import( "@polymer/paper-styles/typography"                  )),
        init(x=>import( "@polymer/paper-styles/demo-pages"                  )),

        init(x=>import( "@polymer/paper-tabs"                               )),
        init(x=>import( "@polymer/paper-tabs/paper-tab"                     )),
        init(x=>import( "@polymer/paper-tabs/paper-tabs-icons"              )),
        init(x=>import( "@polymer/paper-toast"                              )),
        init(x=>import( "@polymer/paper-toggle-button"                      )),
        init(x=>import( "@polymer/paper-toolbar"                            )),
        init(x=>import( "@polymer/paper-tooltip"                            )),
        ]
    }
}

window.customElements.define( LoadPaperElement.is, LoadPaperElement);
