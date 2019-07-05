import React from 'react';
import lottie from 'lottie-web';

const getAnimationTimeout = () => {
    return Math.floor(Math.random() * 10000);
};

class Header extends React.Component {
    componentDidMount() {
        const animation = lottie.loadAnimation({
            container: document.getElementById('vipps-logo'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            progressiveLoad: true,
            path: `./assets/animations/wink.json`,
        });

        animation.onComplete = () => {
            animation.goToAndStop(0);
        };

        setTimeout(() => {
            if (Math.random() >= 0.6) {
                animation.play();
            }

        }, getAnimationTimeout());
    }

    render() {
        return (
            <header
                className="sticky sticky-head"
                data-sticky-on="small"
                data-sticky
                data-margin-top="0">

                <div class="grid-x header fixed-height align-justify">
                    <div class="cell shrink align-self-middle">
                        <a href="/">
                            <div className="vipps-logo-wrapper">
                                <div id="vipps-logo" ß/>
                            </div>
                            <span class="show-for-sr">Gå til forsiden</span>
                        </a>
                    </div>
                    <div class="cell  shrink   show-for-small-only">
                         <button data-toggle="collapse" aria-controls="menu" aria-expanded="false" aria-label="Vis meny">
                                Meny
                            </button>
                    </div>
                    <div class="cell  small-12  medium-auto  medium-text-right align-self-middle">
                        <nav id="menu" class="show-for-medium">
                            <ul class="menu  vertical  medium-horizontal">
                                <li class="menu__item  "><a href="/produkter-og-tjenester/">Produkter og tjenester</a></li>
                                <li class="menu__item  "><a href="/hjelp/">Hjelp</a></li>
                                <li class="menu__item  menu__item--login"><a href="/logg-inn/">Logg inn</a></li>
                            </ul>
                        </nav>
                    </div>
               </div>
            </header>
        );
    }
}

export default Header;
