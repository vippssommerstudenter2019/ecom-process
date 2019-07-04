import React, {Component} from 'react';
import {Element} from 'react-scroll'
import CodeView from "./CodeView"


/*
Wrapper for future content: code + text + image
ScrollLinking
*/


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
		
		CSS class tags:
			.step-container		->	The css-container/grid for the step layout
			.step-title			->	The css-title grid-field tag
			.step-description	->	The css-text  grid-field tag
		**	.step-code			->	The css-code  grid-field tag
		**	.step-image-left	->	The css-left  grid-field tag
		**	.step-image-right	->	The css-left  grid-field tag
			
		** should be made optional in css => 'auto' sized
		
		Crude CSS proposal:
			.step-title			{ grid-area: step-title; /..more../ }
			.step-description	{ grid-area: step-desc;  /..more../ }
			.step-code			{ grid-area: step-code;  /..more../ }
			.step-image			{ grid-area: step-image; /..more../ }
			.step-container {
				display: grid;
				grid-template-columns: 1fr 1fr auto;
				grid-template-rows: auto auto;	***
				grid-template-areas:
					"step-title step-title step-image"
					"step-desc step-code step-image";
			}
		
		***A maybe too flexible proposal
		/..more../ Add inn some additional formatting to make it nice
	*/
	renderImage() {
		//if (!this.props.imagelink) return;
		const imglink = "./assets/guide-images/Step1.svg";//this.props.imagelink;
		console.log(imglink);
		const pos = (this.props.position === 'left')? "step-image-left" : "step-image-right";
		return (
			<div className={pos} >
				<img src={imglink} />
			</div>
		);
	}
	
	renderCode() {
		if (!this.props.code) return;
		return (
			<div className="step-code">
				<CodeView language={this.props.language} code={this.props.code} />
			</div>
		);
	}
	
	renderTitle() {
		return (
			<div className="step-title xlarge-font-size text-color-black">
				{this.props.title}
			</div>
		);
	}
	
	renderDescription() {
		return (
			<div className="step-description default-font-size text-color-black">
				{this.props.description}		
			</div>
		);
	}
	
	render() {
		return (
			<div className="step-container" id={this.props.scrollId}>
				{this.renderTitle()}
				{this.renderImage()}
				{this.renderDescription()}
				{this.renderCode()}
			</div>
		);
	};
}

export default Step;


