import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './src/web-elemens-loader.js';

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
          box-shadow: inset  0 -3em 3em rgba(0,0,0,0.1), 
                             0 0  0 2px rgb(255,255,255),
                             0.3em 0.3em 1em rgba(0,0,0,0.3);
        }
        h3{ color: purple; }
      </style>
      <h2>&lt;polymer3vaadin15-element&gt; instance</h2>
      <h3>H3 prop1: [[prop1]]!</h3>
      <p>prop2: [[prop2]]</p>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer3vaadin15-element',
      },
      prop2: String
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
