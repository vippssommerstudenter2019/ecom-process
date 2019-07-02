import React from 'react';
import logo from './logo.svg';
import './App.css';
import CodeView from "./components/CodeView"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {}
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
      .then(response => this.setState({ data: response.data.fetchAuthorizationTokenUsingPost.code }));
  }

  render() {
    return (
      <div className="App">
        <CodeView codeMap={this.state.data} />
      </div>
    );
  }
}

export default App;
