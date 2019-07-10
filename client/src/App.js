import React from 'react';
import Content from "./components/Content"
import { StickyContainer } from 'react-sticky';
import './App.css';
import { Sections, Intro } from "./Model";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroBox from "./components/IntroBox";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<StickyContainer>
					<div className="content-wrapper">
						<div className="intro-area">
							<IntroBox content={Intro} />
						</div>
						<div className="step-area">
							<Content url="https://raw.githubusercontent.com/vippsas/vipps-ecom-api/master/docs/swagger.yaml" sections={Sections} />
						</div>
					</div>
				</StickyContainer>
				<Footer />
			</div>
		)
	}
}

export default App;
