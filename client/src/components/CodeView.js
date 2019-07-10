import "../App.css";
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';
import 'codemirror/mode/http/http';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/ruby/ruby';

const propTypes = {
	language: PropTypes.string.isRequired,
	code: PropTypes.string.isRequired
};

const langmap = {
	"java": "text/x-java",
	"go": "text/x-go",
}

class CodeView extends Component {

	constructor(props) {
		super(props);

		this.handleCopyClick = this.handleCopyClick.bind(this);
	}

	/**
	 * Handles the click when the user wants to copy the code.
	 */
	handleCopyClick() {

		// We create a fake text area and inject the code into it
		var textArea = document.createElement("textarea");
		textArea.value = this.props.code;
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		// Try to copy from that text area
		try {

			document.execCommand("copy");

			// TODO: Implement overlay for successful copy when design is ready
			//var successful = document.execCommand('copy');
			// var msg = successful ? 'Copied' : 'Couldn\'t copy';
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
		}

		document.body.removeChild(textArea);
	}


	render() {

		// The languages to choose from.
		let items = [];

		// Populate the utility bar with languages to choose
		Array.from(this.props.languages, (val, i) => {
			if (val === this.props.language) items.push(<button className="selected"> {val} </button>);
			else items.push(<button onClick={() => this.props.langcall(val)}> {val} </button>);
			return val;
		});

		// Settings for code mirror
		const options = {
			mode: langmap[this.props.language] || this.props.language,
			theme: 'vipps',
			lineNumbers: true,
			lineWrapping: true,
		};

		return (
			// Render a code mirror with an utility bar and style it according to Vipps style.
			<div className="small-font-size">
				<div className="codeview-utility-bar">
					<div className="codeview-utility-bar-left">
						{items}
					</div>
					<div className="codeview-utility-bar-right">
						<button onClick={this.handleCopyClick}>Copy</button>
					</div>
				</div>
				<CodeMirror
					editorDidMount={ed => ed.refresh()}
					value={this.props.code}
					options={options}
					scrollbarStyle="null">
				</CodeMirror>
			</div>
		);
	}
}

CodeView.propTypes = propTypes;

export default CodeView;