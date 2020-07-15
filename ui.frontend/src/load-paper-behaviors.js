import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadPaperBehaviors extends LoadCollection
{

    static get is(){ return 'load-paper-behaviors'}

    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import( "@polymer/paper-behaviors/paper-button-behavior"           )),
        init(x=>import( "@polymer/paper-behaviors/paper-checked-element-behavior"  )),
        init(x=>import( "@polymer/paper-behaviors/paper-inky-focus-behavior"       )),
        init(x=>import( "@polymer/paper-behaviors/paper-ripple-behavior"           )),
        ]
    }
}

window.customElements.define( LoadPaperBehaviors.is, LoadPaperBehaviors);
