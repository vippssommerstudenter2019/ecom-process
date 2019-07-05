import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="grid-container">
            <div className="grid-x  grid-padding-x">
                <div className="cell  small-11  small-offset-1  medium-1  medium-offset-0  large-1">
                    <img className="footer__logo" src="./assets/images/vipps-smile.svg" alt="" />
                </div>
                <div className="cell  small-11  small-offset-1  medium-3  medium-offset-0  large-3">
                    <p className="footer__vision">Vipps AS - made in Norway, with love for simplicity.</p>
                </div>
                <div className="cell  small-11  small-offset-1  medium-3  medium-offset-1  large-3  large-offset-2">
                    <nav>
                        <ul className="footer-list">
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/om-oss/">
                                    About Vipps
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/om-oss/jobb-hos-oss/">
                                    Work in Vipps
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/kontakt-oss/">
                                    Contact us
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
                                    For developers
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a className="footer-list__link" href="https://www.vipps.no/vis-at-du-tar-vipps/">
                                   Market material 
                </a>
                            </li>
                            <li className="footer-list__item">
                                <a
                                    className="footer-list__link"
                                    href="https://www.vipps.no/personvern-og-vilk%C3%A5r/"
                                >
                                   Privacy and conditions 
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