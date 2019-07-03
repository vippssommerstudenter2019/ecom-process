import React, {Container}from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from './logo.svg';
import './App.css';
//import SideBar from "./components/SideBar";
import Step from "./components/Step";
import {data as sections} from "./Model";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
	  activeLanguage: "python",
	  swaggerResponse: {},
	  sections: sections,
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
  
  contenFromSection(section, id) {
	  const language = this.state.activeLanguage;
	  const swagger = this.state.swaggerResponse;
	  
	  const title = section.title;
	  const description = section.description;
	  //const imagelink = section.imagelink;
	  
	  const code = "Hello World!";
	  
	  if (code) {
		  return (
			<Step scrollId={id} title={title} description={description} language={language} code={code} />
		  );
	  } else {
		  return (
			<Step scrollId={id} title={title} description={description} />
		  );
	  }
  }
  
  renderContent() {
	  const sections = this.state.sections.slice();
	  
	  let items = [];
	  Array.from(sections, (val, index) => {items.push(this.contentFromSection(val, index));});
	  
	  return (
		<div className="app-contents">
			{items}
		</div>
	  );
  }

  render() {


	// <SideBar elements={this.state.elements} num="1" />
    return (
      <StickyContainer className="App">
		{this.renderContent()}
      </StickyContainer>
    );
  }
}



export default App;
