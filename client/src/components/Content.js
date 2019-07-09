import React from "react";
import PropTypes from "prop-types";
import {Step, CodeStep} from "./Step";

const propTypes = {
    activeLanguage: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

class Content extends React.Component {

    constructor(props) {
        super(props);
        let languages = ["python", "shell", "http", "javascript", "ruby", "java", "go"];
        this.state = {
            activeLanguage: languages[0],
			languages: languages,
            swaggerResponse: {},
            sections: this.props.sections,
        };
		
		this.languageCallback = this.languageCallback.bind(this)
    }
	
	languageCallback(language) {
		//console.log("LangLog:1 ", language);
		if (language === this.props.activeLanguage) return;
		const languages = this.state.languages.slice();
		//console.log("LangLog:2 ", language);
		for (let i in languages) {
			//console.log(languages[i], language)
			if (language === languages[i]) {
				//console.log("LangLog:3 ", language);
				this.setState({activeLanguage: language});
				break;
			}
		}
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
        const language  = this.state.activeLanguage;
		const languages = this.state.languages.slice();
		const langcall  = this.languageCallback;
        const swagger   = this.state.swaggerResponse;
		//console.log("Content", langcall);

        const id = section.id;
        const title = section.title;
        const description = section.description;
        const imagelink = section.img;
    	const position = (i % 2 === 0) ?  'left' : 'right';

        if (JSON.stringify(swagger).indexOf(id) >= 0) {
            const code = swagger["data"][id]["code"][language];
            //console.log("/////////// Has Code", id, "///////////");
            //console.log(code);
            return (
                <CodeStep 
					key={id} 
					scrollId={id} 
					title={title} 
					description={description} 
					language={language}
					languages={languages}
					langcall={langcall}
					code={code} 
					imagelink={imagelink}
					position={position}
				/>
            );
        } else {
            //console.log("/////////// Has -NO- Code", id, "///////////");
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
            <div> 
		        {items}
            </div>
        );
    }

}

Content.propTypes = propTypes;

export default Content;