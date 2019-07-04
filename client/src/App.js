import React from 'react';
import Content from "./components/Content"
import { StickyContainer } from 'react-sticky';
import './App.css';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<StickyContainer>
					<Content url="https://raw.githubusercontent.com/vippsas/vipps-ecom-api/master/docs/swagger.yaml"/>
				</StickyContainer>
			</div>
		);
	}
}



export default App;
