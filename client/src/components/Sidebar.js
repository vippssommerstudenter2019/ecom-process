import React, {Container}from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Sidebar extends Component {
	return (
		<li> 
			<Link activeClass="active" to={this.props.num} spy={true} smooth={true} duration={500}> 
				{status}
			</Link> 
		</li>
	
	);
}