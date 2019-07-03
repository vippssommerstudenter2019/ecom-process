import React, {Container}from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from './logo.svg';
import './App.css';
//import SideBar from "./components/SideBar";
import Step from "./components/Step";
import {Sections} from "./Model";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
	  activeLanguage: "python",
	  swaggerResponse: {},
	  sections: Sections,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const data = {
      url: "https://raw.githubusercontent.com/vippsas/vipps-ecom-api/master/docs/swagger.yaml"
    }

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch("/swaggerdata/get", options)
      .then(response => response.json())
      .then(response => this.setState({swaggerResponse: response}));
	  //response.data.fetchAuthorizationTokenUsingPost.code.python
  }
  
  contentFromSection(section) {
	  const language = this.state.activeLanguage;
	  const codeData = this.state.swaggerResponse;;
	  
	  const id = section.id;
	  const title = section.title;
	  const description = section.description;
	  //const imagelink = section.imagelink;
    
		console.log(JSON.stringify(codeData));
		
	  if (false && id in codeData) {
		  const code = codeData["data"][id]["code"][language];
		  return (
		  
			<Step key={id} scrollId={id} title={title} description={description} s_language={language} s_code={code} />
		  );
	  } else {
		  return (
			<Step key={id} scrollId={id} title={title} description={description} />
		  );
	  }
  }
  
  renderContent() {
	  const sections = this.state.sections.slice();
	  
	  let items = [];
	  Array.from(sections, (val, index) => {items.push(this.contentFromSection(val));});
	  
	  return (
		<div className="app-contents">
			{items}
		</div>
	  );
  }

  render() {


	// <SideBar elements={this.state.elements} num="1" />
    return (
	<div className="App">
      <StickyContainer>
		{this.renderContent()}
      </StickyContainer>
	</div>
    );
  }
}



export default App;
