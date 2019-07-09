import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import "../App.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import DropDownPicker from './DropDownPicker.js';


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
	const language  = this.props.language;
	const languages = this.props.languages;
	const langcall  = this.props.langcall;
	//console.log("CodeView", langcall);
	
	const code = this.props.code;
	const options = {
		mode: language,
		theme: 'vipps',
		lineNumbers: true,
		lineWrapping: true,
	};
	const onChange = (editor, data, value) => {console.log(editor.options.mode);};
	
    return (
      // Use the default Vipps card and enrich it with the syntax highlighted code for the current language
      <div className="small-font-size">
		<div className="CodeTop" >
			<DropDownPicker 
				choices={languages} 
				selected={language} 
				callback={langcall} 
			/>
		</div>
        <CodeMirror 
			editorDidMount={ed => ed.refresh()}
			value={code} 
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