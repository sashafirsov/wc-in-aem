import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polymer3vaadin15-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Polymer3vaadin15Element extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer3vaadin15-element',
      },
    };
  }
}
const FALSE=!1;
if( FALSE ) // only for enforcing demo dependencies
{
    import( "@polymer/iron-demo-helpers/demo-pages-shared-styles.js" );
    import( "@polymer/iron-demo-helpers/demo-snippet.js" );
}
window.customElements.define('polymer3vaadin15-element', Polymer3vaadin15Element);
