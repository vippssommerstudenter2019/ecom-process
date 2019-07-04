import React, {Component} from 'react';
import {Element} from 'react-scroll';
import CodeView from "./CodeView";
//import Img from "./ecom-steps/Step1.svg";


/*
Wrapper for future content: code + text + image
ScrollLinking
*/

const titleClass = "step-title xlarge-font-size text-color-black";
const descriptionClass = "default-font-size text-color-black";

class Step extends Component {
	/*
		Supportet / Needed Props:
			title		->	the Title of the step
			description	->	the Description of the step
			scrollId	->	the scroll ref-id
		*	s_language	->	the language of the displayed code
		*	s_code	 	->	the actual code, .. in the correct language
		*	imagelink	->	a relevant image
		*	position 	->	the position of the image [ 'left' / 'right' ]
			
		* optional
	*/
	
	render() {
		const imgflt = "step-float-" +(this.props.position === 'left')? "right" : "left"
		const txtflt = "step-float-" + this.props.position;

		const img = this.props.imagelink;
		const code = this.props.code;
		const title = this.props.title;
		const description = this.props.description;
		
		return (
			<div className="step-wrapper" id={this.props.scrollId}>
				<div className={"step-text " + txtflt} vertical-align="center">
					<div className={titleClass}>
						{this.props.title}
					</div>
					<div className="step-pad" />
					<div className={descriptionClass}>
						{this.props.description}
					</div>
				</div>
				<div className={"step-image " + imgflt} vertical-align="center">
					<img src={this.props.imagelink} />
				</div>
			</div>
		);
	}
}

class CodeStep extends Component {
	
	render() {
		const imgflt = "step-float-" +(this.props.position === 'left')? "right" : "left"
		const txtflt = "step-float-" + this.props.position;
		
		return (
			<div className="step-wrapper" id={this.props.scrollId}>
				<div className="step-title">
					<div className={"step-text " + txtflt}>
						<div className={titleClass}>
							{this.props.title}
						</div>
					</div>
				</div>
				<div className="step-pad" />
				<div className={"step-text " + txtflt}>
					<div className={descriptionClass}>
						{this.props.description}
					</div>
					<div className="step-pad" />
					<CodeView language={this.props.language} code={this.props.code} />
				</div>
				<div className={"step-img " + imgflt}>
					<img src={this.props.imagelink} />
				</div>
			</div>
		);
	}
}

export {
	Step, 
	CodeStep,
};
//export default CodeStep;

