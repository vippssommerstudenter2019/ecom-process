import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import "../App.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';


const propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

class CodeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: true,
		};
	}
	
  render() {
	
	
	const options = {
		mode: this.props.language,
		theme: 'material',
		lineNumbers: true,
		lineWrapping: true,
	};
	const onChange = (editor, data, value) => {editor.SetState({value: value});};
	
	/*setTimeout(() => {
		Array.from(document.getElementsByClassName('CodeMirror'), (el, _) => el.CodeMirror.refresh());
	}, 1);
	*/
	
	//vw [ViewWidth] / vh [ViewHeight] >> css scale params..
	
    return (
      // Use the default Vipps card and enrich it with the syntax highlighted code for the current language
      <div className="small-font-size">
        <CodeMirror 
			editorDidMount={ed => ed.refresh()}
			value={this.props.code} 
			options={options}
			onChange={onChange}
			scrollbarStyle="null"
		/>
	  </div>
    );
	//<div className="white-bg card padding-m">
  }
}

CodeView.propTypes = propTypes;

export default CodeView;