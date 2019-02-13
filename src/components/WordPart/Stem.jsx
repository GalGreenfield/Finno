import React from 'react';

//renderless component, passes data from `Word` to `WordPart`
export default class Stem extends React.Component {

    constructor(props) {
        super(props);
        this.translation = props.translation;
        this.role = "stem";
    }

    render() { return null; }

}