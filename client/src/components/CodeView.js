import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import "../App.css";
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';
import 'codemirror/mode/http/http';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/ruby/ruby';
//import 'codemirror/mode/-lang-/-lang-'; To support other languages!!
import DropDownPicker from './DropDownPicker.js';

const propTypes = {
	language: PropTypes.string.isRequired,
	code: PropTypes.string.isRequired
};

const langmap = {
	"java"	: "text/x-java",
	"go"	: "text/x-go",
}

class CodeView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: true,
		};

		this.handleCopyClick = this.handleCopyClick.bind(this);
	}

	handleCopyClick() {
		var textArea = document.createElement("textarea");
		textArea.value = this.props.code;
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			document.execCommand("copy");
			//var successful = document.execCommand('copy');
			// var msg = successful ? 'Copied' : 'Couldn\'t copy';
			// TODO: Implement overlay for successful copy when design is ready
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
		}

		document.body.removeChild(textArea);
	}

	
  render() {
	const language  = this.props.language;
	const languages = this.props.languages;
	const langcall  = this.props.langcall;
	//console.log("CodeView", langcall);
	
	let items = [];
	Array.from(languages, (val, i) => {
		if (val === language) items.push(<button className="selected"> {val} </button>);
		else items.push(<button onClick={()=>langcall(val)}> {val} </button>);
		return val;
	});
	
	const code = this.props.code;
	const options = {
		mode: langmap[language] || language,
		theme: 'vipps',
		lineNumbers: true,
		lineWrapping: true,
	};
	const onChange = (editor, data, value) => {console.log(editor.options.mode);};
		//<DropDownPicker choices={languages} selected={language} callback={langcall} />
		return (

			// Use the default Vipps card and enrich it with the syntax highlighted code for the current language
			<div className="small-font-size">
				<div className="code-top">
					<div className="code-top-left">
						{items}
					</div>	
					<div className="code-top-right">
						<button className="codeview-button" onClick={this.handleCopyClick}>Copy</button>
					</div>
				</div>
					<CodeMirror
						editorDidMount={ed => ed.refresh()}
						value={this.props.code}
						options={options}
						onChange={onChange}
						scrollbarStyle="null">
					</CodeMirror>
		</div>
		);
	}
}

CodeView.propTypes = propTypes;

export default CodeView;