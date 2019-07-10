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

                <div className="grid-x header fixed-height align-justify">
                    <div className="cell shrink align-self-middle">
                        <a href="/">
                            <div className="vipps-logo-wrapper">
                                <div id="vipps-logo"/>
                            </div>
                            <span className="show-for-sr">Gå til forsiden</span>
                        </a>
                    </div>
                    <div className="cell  shrink   show-for-small-only">
                         <button data-toggle="collapse" aria-controls="menu" aria-expanded="false" aria-label="Vis meny">
                                Meny
                            </button>
                    </div>
                    <div className="cell  small-12  medium-auto  medium-text-right align-self-middle">
                        <nav id="menu" className="show-for-medium">
                            <ul className="menu  vertical  medium-horizontal">
                                <li className="menu__item  "><a href="https://www.vipps.no/produkter-og-tjenester/bedrift/">Products and services</a></li>
                                <li className="menu__item  "><a href="https://www.vipps.no/hjelp/">Help</a></li>
                                <li className="menu__item  menu__item--login"><a href="https://www.vipps.no/logg-inn/">Log in</a></li>
                            </ul>
                        </nav>
                    </div>
               </div>
            </header>
        );
    }
}

export default Header;
