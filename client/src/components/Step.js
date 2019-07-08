import React, {Component} from 'react';
import CodeView from "./CodeView";


/*
Wrapper for future content: code + text + image
ScrollLinking
*/
const titleClass = "xlarge-font-size text-color-black";
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
		const imgflt = "step-img-" + ((this.props.position === 'left')? "right" : "left");
		
		return (
			<div className="step-wrapper" id={this.props.scrollId}>
				<div className={"step-text"} vertical-align="center">
					
					<div className="step-sub-text">
						<div className={titleClass}>{this.props.title}</div>
					</div>
					
					<div className="step-sub-text">
						<div className={descriptionClass}>{this.props.description}</div>
					</div>
					
				</div>
				
				<div className={imgflt} vertical-align="center">
					<img src={this.props.imagelink} />
				</div>
				
			</div>
		);
	}
}

class CodeStep extends Component {
	
	render() {
		const imgflt = "code-img-" + ((this.props.position === 'left')? "right" : "left");
		
		return (
			<div className="code-wrapper" id={this.props.scrollId}>
			
				<div className="code-title">
					<div className={titleClass}>{this.props.title}</div>
				</div>
				
				<div className="code-description" >
					<div className={descriptionClass}>{this.props.description}</div>
				</div>
				
				<div className="code-code" >
					<CodeView language={this.props.language} code={this.props.code} />
				</div>
				
				<div className={imgflt}>
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

