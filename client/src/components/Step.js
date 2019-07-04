import React, {Component} from 'react';
import {Element} from 'react-scroll';
import CodeView from "./CodeView";
//import Img from "./ecom-steps/Step1.svg";


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
		const imglink = this.props.imagelink;
		return (<img src={imglink} />);
	}
	
	renderCode() {
		return (<CodeView language={this.props.language} code={this.props.code} />);
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
			<div className="default-font-size text-color-black">
				{this.props.description}		
			</div>
		);
	}
	
	render() {
		const flt = (this.props.position === 'left')? "right" : "left"
		const txt = "step-text  step-float-" + this.props.position;
		const img = "step-image step-float-" + flt;
		if (this.props.code) {
			return (
				<div className="step-wrapper" id={this.props.scrollId}>
					<div className="step-title">
						<div className={txt}>
							{this.renderTitle()}
						</div>
					</div>
					<div className="step-pad" />
					<div className={txt}>
						{this.renderDescription()}
						<div className="step-pad" />
						{this.renderCode()}
					</div>
					<div className={img}>
						{this.renderImage()}
					</div>
				</div>
			);
		} else {
			return (
				<div className="step-wrapper" id={this.props.scrollId}>
					<div className={txt} vertical-align="center">
						{this.renderTitle()}
						<div className="step-pad" />
						{this.renderDescription()}
					</div>
					<div className={img} vertical-align="center">
						{this.renderImage()}
					</div>
				</div>
			);
		}
	};
}

export default Step;


