import React from 'react';
import Content from "./components/Content"
import { StickyContainer } from 'react-sticky';
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroBox from "./components/IntroBox";

import './styles/how-it-works.css';

class HowItWorks extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<StickyContainer>
					<div className="content-wrapper">
						<div className="intro-area">
							<IntroBox content={this.props.intro} />
						</div>
						<div className="step-area">
							<Content url="https://raw.githubusercontent.com/vippsas/vipps-ecom-api/master/docs/swagger.yaml" sections={this.props.sections}/>
						</div>
					</div>
				</StickyContainer>
				<Footer />
			</div>
		)
	}
}

export default HowItWorks;
