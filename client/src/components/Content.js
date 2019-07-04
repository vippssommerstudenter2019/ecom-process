import React from "react";
import PropTypes from "prop-types";
import Step from "./Step";

const propTypes = {
    activeLanguage: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

class Content extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            activeLanguage: this.props.activeLanguage,
            swaggerResponse: {},
            sections: this.props.sections,
        };

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const data = {
            url: this.props.url
        };

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch("/swaggerdata/get", options)
            .then(response => response.json())
            .then(response => this.setState({ swaggerResponse: response }))
    }

    contentFromSection(section, i) {
        const language = this.state.activeLanguage;
        const swagger = this.state.swaggerResponse;

        const id = section.id;
        const title = section.title;
        const description = section.description;
        const imagelink = section.imagelink;
    		const position = (i % 2 === 0) ?  'left' : 'right';


        if (JSON.stringify(swagger).indexOf(id) >= 0) {
            const code = swagger["data"][id]["code"][language];
            console.log("/////////// Has Code", id, "///////////");
            console.log(code);
            return (
                <Step 
					key={id} 
					scrollId={id} 
					title={title} 
					description={description} 
					language={language} 
					code={code} 
					imagelink={imagelink}
					position={position}
				/>
            );
        } else {
            console.log("/////////// Has -NO- Code", id, "///////////");
            return (
                <Step
					key={id} 
					scrollId={id} 
					title={title} 
					description={description} 
					imagelink={imagelink}
					position={position}
				/>
            );
        }
    }

    render() {
        const sections = this.state.sections.slice();

        let items = [];
        Array.from(sections, (val, index) => { items.push(this.contentFromSection(val, index)); });

        return (
            <div className="content-columns">
                {items}
            </div>
        );
    }

}

Content.propTypes = propTypes;

export default Content;