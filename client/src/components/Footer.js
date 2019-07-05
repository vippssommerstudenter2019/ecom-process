import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="grid-container">
            <div className="grid-x  grid-padding-x">
                <div className="cell  small-11  small-offset-1  medium-1  medium-offset-0  large-1">
                    <img className="footer__logo" src="./assets/images/vipps-smile.svg" alt="" />
                </div>
                <div className="cell  small-11  small-offset-1  medium-3  medium-offset-0  large-3">
                    <p className="footer__vision">Vipps AS - laget i Norge, med kjærlighet for forenkling.</p>
                </div>
                <div className="cell  small-11  small-offset-1  medium-3  medium-offset-1  large-3  large-offset-2">
                    <nav>
                        <ul className="footer-list">
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/om-oss/">
                                    Om Vipps
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/om-oss/jobb-hos-oss/">
                                    Jobb i Vipps
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/kontakt-oss/">
                                    Kontakt oss
                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="cell  small-11  small-offset-1  medium-4  medium-offset-0  large-3">
                    <nav>
                        <ul className="footer-list">
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/developer/">
                                    For utviklere
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/vis-at-du-tar-vipps/">
                                    Markedsmateriell
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a
                                    className="footer-list__link"
                                    href="https://www.vipps.no/personvern-og-vilk%C3%A5r/"
                                >
                                    Personvern og vilkår
                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;