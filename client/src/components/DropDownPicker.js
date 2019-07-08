import React, {Component} from 'react';

class DropDownPicker extends Component {
	/*
		Props:
			choices			 string[]
			selected		 string
			onClickCallback (string) => set_selected
	*/
	
	render() {
		const butt_str = "button tiny hollow";
		const choices  = this.props.choices;
		const callback = this.props.onClickCallback;
		const selected = this.props.selected;
		
		let items = [];
		Array.from(choices, (val, i) => {
			items.push(
				<div> 
					<button key={val} className={butt_str} onClick={()=>callback(val)}> 
						{val} 
					</button>
				</div>
			);
		});
		//
		return (
			<div className="dropdown">
				<div className="dropdown-title-box">
					<span>
						<button className={"dropdown-icon " + butt_str}>
							{selected} 
						</button>
					</span>
				</div>
				
				<div className="dropdown-content">{items}</div>
			</div>
		);
	}
}

export default DropDownPicker;