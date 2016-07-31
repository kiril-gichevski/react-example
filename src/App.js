import React, {Component} from 'react';
import Paragraph from './Paragraph';

const App = React.createClass({
    render() {
        return (
            <div className="my-app">
                <h1>This is React!!!</h1>
                <Paragraph text="First Paragraph" />
                <Paragraph text="Second Paragraph" />
            </div>
        );
    }
});
export default App;