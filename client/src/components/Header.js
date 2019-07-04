import React from 'react';
import lottie from 'lottie-web';
import "../App.css";

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
            path: `assets/animations/wink.json`,
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
                data-margin-top="0"
            >
                <div className="grid-container">
                    <div className="grid-x header fixed-height align-justify">
                        <div className="cell shrink align-self-middle">
                            <a href="/">
                                <div className="vipps-logo-wrapper">
                                    <div id="vipps-logo" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
