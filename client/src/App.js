import React from 'react';
import Content from "./components/Content"
import { StickyContainer } from 'react-sticky';
import './App.css';
import { Sections } from "./Model";
import Footer from "./components/Footer";

class App extends React.Component {

  constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<StickyContainer>
					<Content activeLanguage="python" url="https://raw.githubusercontent.com/vippsas/vipps-ecom-api/master/docs/swagger.yaml" sections={Sections}/>
				</StickyContainer>
				<Footer />
			</div>
		)	
	}
}

export default App;
