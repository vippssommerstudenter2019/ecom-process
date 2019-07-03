import React, {Container}from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import logo from './logo.svg';
import './App.css';
import CodeView from "./components/CodeView"
import SideBar from "./components/SideBar"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: "",
      elements: ["1", "2", "3", "4"]
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
      .then(response => this.setState({data: response.data.fetchAuthorizationTokenUsingPost.code.python}));
  }

  render() {

    return (
      <div className="App">

        <CodeView language="python" code={this.state.data} />
        <SideBar elements={this.state.elements} num="1" />
      </div>
    );
  }
}



export default App;
