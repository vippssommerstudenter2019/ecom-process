import React, {Container}from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



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
			language	->	the language of the displayed code
		*	code	 	->	the actual code, .. in the correct language
		*	image		->	a relevant image
		*	imageIsLeft ->	the position of the image
			
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
		if (!this.props.image) return;
		const pos = (this.props.imageIsLeft)? "step-image-left" : "step-image-right";
		return (
			<div className={pos}>
				<img href={this.props.image} />
			</div>
		);
	}
	
	renderCode() {
		if (this.props.code) return;
		return <CodeView className="step-code" language={this.state.language} code={this.state.code} />
	}
	
	render() {
		return (
			<div className="step-container" id={this.props.scrollId}>
				{this.renderImage()}
				<div className="step-title">
					{this.props.title}
				</div>
				<div className="step-description">
					{this.props.description}
				</div>
				{this.renderCode()}
			</div>
		);
	};
}

export default Step;


