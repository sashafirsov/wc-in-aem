import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-ajax";
import "./load-polymer-elements";
import "./load-iron-elements";
import "./load-neon-animation";
import "./load-paper-behaviors";
import "./load-paper-elements";
import "./load-vaadin-elements";
import "./load-mwc";
import "./load-ionic";

/**
 * Current web-elemens-loader version in Semver notation.
 * @type {string} Semver notation of the current version of Polymer.
 */
export const version="0.0.1";

/**
 * `web-elemens-loader`
 * Container of Polymer Elements and Vaadin web components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WebcomponentsElement extends PolymerElement
{
    static get template()
    {
        return html`
<template is="dom-if" if="[[_inStatus('loading',state)]]">
    <slot name="loading">loading...</slot>
</template>
<template is="dom-if" if="[[_inStatus('ready',state)]]">
    <slot>
        <slot name="ready">ready</slot>
    </slot>
</template>
<template is="dom-if" if="[[ visible ]]" >
    <style>
      :host { display: block; }
    </style>
    <h2>Web Components Collections Loader</h2>
    <i>Components are pulled as lazy loaded dependencies.</i>
</template>
<load-polymer-elements  disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-polymer-elements>
<!--<load-paper-behaviors   disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-paper-behaviors>-->
<load-paper-elements    disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-paper-elements>
<load-neon-animation    disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-neon-animation>
<load-iron-elements     disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-iron-elements>
<load-vaadin-elements   disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-vaadin-elements>
<load-mwc               disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-mwc>
<load-ionic             disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-ionic>
    `;
    }

    static get properties()
    {
        return  {   selection: { type: String, value: "all", notify:true, reflectToAttribute:true }
                ,    disabled: { type: String, reflectToAttribute:true }
                ,     visible: { type:Boolean, reflectToAttribute:true, value:false }
                ,     version: { type: String, reflectToAttribute:true, value: version, readOnly:true }
                ,       state: { type: String, reflectToAttribute:true, value: "", readOnly:false }
                };
    }

    ready()
    {
        super.ready();
        this.importDependencies();
    }
    get promise()
    {   if( "ready" === this.state )
            return Promise.resolve(this);
        return this.promiseNext;
    }
    get promiseNext()
    {   const zs = this;
        return new Promise( function( resolve, reject )
        {   zs.addEventListener( 'error' , _onError );
            zs.addEventListener( 'load'  , _onLoad  );
                function
            _onLoad()
            {   try{ resolve(zs); }
                finally { releaseEv(); }
            }
                function
            _onError( err )
            {   try{ reject(err); }
                finally { releaseEv(); }
            }
                function
            releaseEv()
            {   zs.removeEventListener('load' , _onLoad  );
                zs.removeEventListener('error', _onError );
            }
        });
    }
    importDependencies()
    {   this.set('state', "loading" );
        return Promise.all( [...this.shadowRoot.querySelectorAll(".load-collection")].map( el=>el.promise ) )
            .then( x=>
            {
                this.set('state', "ready" );
                this.dispatchEvent( new CustomEvent("load", {target:this}));
            }
            , err=> console.error( err ) );
    }
    onCollectionChanged()
    {
        const o={};
        [...this.shadowRoot.querySelectorAll('.load-collection')]
            .map( col=> col.getSelection() ).forEach( sel=>sel.split(',').forEach( m=>o[m]=m ));

        this.set( 'selection',Object.keys(o).join(',') );
    }
    _inStatus(str){ return str === this.state }
}

window.customElements.define( 'web-elemens-loader', WebcomponentsElement );
