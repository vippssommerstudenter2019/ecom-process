import React, {Container}from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



/*
Wrapper for future content: code + text + image
ScrollLinking
*/


class Step extends Component {
	
	render() {
		return (
			<div className="code-spacer">
				<div className={this.props.container} id={this.props.id} onScroll={this.props.onScroll}>
					<div className="code-grid">
						<Element className="code-title">
							Container, 	It uses an inner 'code-grid'
						</Element>
						<div className="code-desc">
							This is the element description,  <br/>
							it contains meaningful content.  <br/>
							Than you for reading!
						</div>
						<div className="code-fill">
							Here will the code come!
						</div>
					</div>
				</div>	
			</div>
		);
	};
}



