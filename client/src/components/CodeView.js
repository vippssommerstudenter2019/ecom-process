import React from 'react';
import { PropTypes } from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Code map is a map of language as keys and the code as the value for the respective
// languages
const propTypes = {
  codeMap: PropTypes.object.isRequired,
};

class CodeView extends React.Component {

  /**
   * Sets the props and the state for the current language.
   */
  constructor(props) {
    super(props);

    this.state = { currentLanguage: "ruby" };
  }

  render() {

    console.log(this.state.currentLanguage);

    return (
      // Use the default Vipps card and enrich it with the syntax highlighted code for the current language
      <div className="white-bg card padding-l">      
        <SyntaxHighlighter language={this.state.currentLanguage} style={prism}>
          {this.props.codeMap[this.state.currentLanguage]}
        </SyntaxHighlighter>
      </div>
    );
  }
}

CodeView.propTypes = propTypes;

export default CodeView;
