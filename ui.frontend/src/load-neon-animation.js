import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadNeonAnimation extends LoadCollection
{

    static get is(){ return 'load-neon-animation'}
    docs(pkg)
    {   return  'web-animations-js' === pkg.name.split('/').shift()
                ? 'https://github.com/web-animations/web-animations-js'
                : 'https://github.com/PolymerElements/neon-animation'
    }
    isDisabledByDefault(pkg)
    {
        return  true;// all disabled by default
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import('web-animations-js/web-animations-next-lite.min'                  )),
        init(x=>import('web-animations-js/web-animations-next.min'                       )),
        init(x=>import('web-animations-js/web-animations.min'                            )),

        // Group animations
        init(x=>import('@polymer/neon-animation/animations/cascaded-animation'           )),

        // Shared element animations
        init(x=>import('@polymer/neon-animation/animations/hero-animation'               )),
        init(x=>import('@polymer/neon-animation/animations/ripple-animation'             )),

        // Single element animations
        init(x=>import('@polymer/neon-animation/animations/fade-in-animation'            )),
        init(x=>import('@polymer/neon-animation/animations/fade-out-animation'           )),
        init(x=>import('@polymer/neon-animation/animations/opaque-animation'             )),
        init(x=>import('@polymer/neon-animation/animations/ripple-animation'     )),
        init(x=>import('@polymer/neon-animation/animations/reverse-ripple-animation'     )),
        init(x=>import('@polymer/neon-animation/animations/scale-down-animation'         )),
        init(x=>import('@polymer/neon-animation/animations/scale-up-animation'           )),
        init(x=>import('@polymer/neon-animation/animations/slide-down-animation'         )),
        init(x=>import('@polymer/neon-animation/animations/slide-from-bottom-animation'  )),
        init(x=>import('@polymer/neon-animation/animations/slide-from-left-animation'    )),
        init(x=>import('@polymer/neon-animation/animations/slide-from-right-animation'   )),
        init(x=>import('@polymer/neon-animation/animations/slide-from-top-animation'     )),
        init(x=>import('@polymer/neon-animation/animations/slide-left-animation'         )),
        init(x=>import('@polymer/neon-animation/animations/slide-right-animation'        )),
        init(x=>import('@polymer/neon-animation/animations/slide-up-animation'           )),
        init(x=>import('@polymer/neon-animation/animations/transform-animation'          )),

        init(x=>import('@polymer/neon-animation/neon-animatable-behavior'                )),
        init(x=>import('@polymer/neon-animation/neon-animatable'                         )),
        init(x=>import('@polymer/neon-animation/neon-animated-pages'                     )),
        init(x=>import('@polymer/neon-animation/neon-animation-behavior'                 )),
        init(x=>import('@polymer/neon-animation/neon-animation-runner-behavior'          )),
        init(x=>import('@polymer/neon-animation/neon-animation'                          )),
        init(x=>import('@polymer/neon-animation/neon-animations'                         )),
        init(x=>import('@polymer/neon-animation/neon-shared-element-animatable-behavior' )),
        init(x=>import('@polymer/neon-animation/neon-shared-element-animation-behavior'  )),
        ]
    }
}

window.customElements.define( LoadNeonAnimation.is, LoadNeonAnimation);
