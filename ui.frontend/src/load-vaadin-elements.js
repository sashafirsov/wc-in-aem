import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadVaadinElement extends LoadCollection
{

    static get is(){ return 'load-vaadin-elements'}
    docs(pkg){ let n=pkg.name.split('/').pop(); return `https://github.com/vaadin/${ n }` }
    isDisabledByDefault(pkg)
    {
        return  [   '@vaadin/vaadin/vaadin'
                ,   '@vaadin/vaadin-core/vaadin-core'
                ,   '@vaadin/vaadin-grid-pro/vaadin-grid-pro'
                ,   '@vaadin/vaadin-board/vaadin-board'
                ,   '@vaadin/vaadin-crud/vaadin-crud'
                ,   '@vaadin/vaadin-charts/vaadin-chart'
                ,   '@vaadin/vaadin-confirm-dialog/vaadin-confirm-dialog'
                ,   '@vaadin/vaadin-cookie-consent/vaadin-cookie-consent'
                ,   '@vaadin/vaadin-rich-text-editor/vaadin-rich-text-editor'
                ,   '@vaadin/vaadin-app-layout/vaadin-app-layout'
                ].includes(pkg)
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import('@vaadin/vaadin/vaadin')),
        init(x=>import('@vaadin/vaadin-element-mixin/vaadin-element-mixin')),
        // @vaadin/vaadin aggregation
        init(x=>import("@vaadin/vaadin-core/vaadin-core"                            )),
        init(x=>import("@vaadin/vaadin-board/vaadin-board"                          )),
        init(x=>import("@vaadin/vaadin-charts/vaadin-chart"                        )),
        init(x=>import("@vaadin/vaadin-confirm-dialog/vaadin-confirm-dialog"        )),
        init(x=>import("@vaadin/vaadin-cookie-consent/vaadin-cookie-consent"        )),
        init(x=>import("@vaadin/vaadin-crud/vaadin-crud"                            )),
        init(x=>import("@vaadin/vaadin-grid-pro/vaadin-grid-pro"                    )),
        init(x=>import("@vaadin/vaadin-rich-text-editor/vaadin-rich-text-editor"    )),

        init( x=>import("@vaadin/vaadin-lumo-styles"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/color"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/typography"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/all-imports"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/badge"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/font-icons"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/icons"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/iconset"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/sizing"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/spacing"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/style"                              )),
        init( x=>import("@vaadin/vaadin-lumo-styles/version"                              )),

        // @vaadin/vaadin README.md
        init( x=>import("@vaadin/vaadin-accordion"                          )),
        init( x=>import("@vaadin/vaadin-app-layout"                         )),
        init( x=>import("@vaadin/vaadin-button"                             )),
        init( x=>import("@vaadin/vaadin-checkbox"                           )),
        init( x=>import("@vaadin/vaadin-checkbox/vaadin-checkbox-group"     )),
        init( x=>import("@vaadin/vaadin-combo-box"                          )),
        init( x=>import("@vaadin/vaadin-context-menu"                       )),
        init( x=>import("@vaadin/vaadin-custom-field"                       )),
        init( x=>import("@vaadin/vaadin-date-picker"                        )),
        init( x=>import("@vaadin/vaadin-details"                            )),
        init( x=>import("@vaadin/vaadin-dialog"                             )),
        init( x=>import("@vaadin/vaadin-form-layout"                        )),
        init( x=>import("@vaadin/vaadin-form-layout/vaadin-form-item"       )),
        init( x=>import("@vaadin/vaadin-grid"                               )),
        init( x=>import("@vaadin/vaadin-icons"                              )),
        init( x=>import("@vaadin/vaadin-item"                               )),
        init( x=>import("@vaadin/vaadin-list-box"                           )),
        init( x=>import("@vaadin/vaadin-login"                              )),
        init( x=>import("@vaadin/vaadin-menu-bar"                           )),
        init( x=>import("@vaadin/vaadin-notification"                       )),
        init( x=>import("@vaadin/vaadin-ordered-layout"                     )),
        init( x=>import("@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout"                     )),
        init( x=>import("@vaadin/vaadin-ordered-layout/vaadin-vertical-layout"                     )),
        init( x=>import("@vaadin/vaadin-ordered-layout/vaadin-scroller"                     )),
        init( x=>import("@vaadin/vaadin-progress-bar"                       )),
        init( x=>import("@vaadin/vaadin-radio-button"                       )),
        init( x=>import("@vaadin/vaadin-select"                             )),
        init( x=>import("@vaadin/vaadin-split-layout"                       )),
        init( x=>import("@vaadin/vaadin-tabs"                               )),
        init( x=>import("@vaadin/vaadin-text-field"                         )),
        init( x=>import("@vaadin/vaadin-text-field/vaadin-text-area"        )),
        init( x=>import("@vaadin/vaadin-text-field/vaadin-password-field"   )),
        init( x=>import("@vaadin/vaadin-text-field/vaadin-number-field"     )),
        init( x=>import("@vaadin/vaadin-text-field/vaadin-integer-field"    )),
        init( x=>import("@vaadin/vaadin-text-field/vaadin-email-field"      )),
        init( x=>import("@vaadin/vaadin-time-picker"                        )),
        init( x=>import("@vaadin/vaadin-upload"                             )),

        init( x=>import("@vaadin/vaadin-lumo-styles"                        )),
        init( x=>import("@vaadin/vaadin-material-styles"                    )),

        init( x=>import("@vaadin/vaadin-overlay"                            )),
        ]
    }

}

window.customElements.define( LoadVaadinElement.is, LoadVaadinElement);
