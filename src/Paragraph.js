import React, {Component} from 'react';

const Paragraph = React.createClass({
    render() {
        return (<p>{this.props.text}</p>);
    }
});
export default Paragraph;