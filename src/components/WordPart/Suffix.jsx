import React from 'react';

//renderless component, passes data from `Word` to `WordPart`
export default class Suffix extends React.Component {

    constructor(props) {
        super(props);
        this.text = props.text;
        this.role = "suffix";
        this.grammaticalCase = props.grammaticalCase;
    }

    render() { return null; }

}