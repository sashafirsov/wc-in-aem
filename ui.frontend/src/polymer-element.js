import {html, PolymerElement,version} from '@polymer/polymer/polymer-element.js';
if( !window.customElements.get('polymer-element') )
    window.customElements.define( 'polymer-element', PolymerElement );
export {html, PolymerElement, version};
export default PolymerElement;
