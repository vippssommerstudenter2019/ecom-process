import React from 'react';
import { PropTypes } from 'prop-types';
import "../vipps-styles.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Default } from './CodeStyle';

const propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

class CodeView extends React.Component {

  /**
   * Sets the props for the current language.
   */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Use the default Vipps card and enrich it with the syntax highlighted code for the current language
      <div className="white-bg card padding-l">
        <SyntaxHighlighter language={this.props.language} style={Default}>
          {this.props.code}
        </SyntaxHighlighter>
      </div>
    );
  }
}

CodeView.propTypes = propTypes;

export default CodeView;
