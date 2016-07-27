import React from 'react';

class AddIn extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            message: props.message || 'hello'
        };
    }

    render() {
        return (
            <div>
                <h3>Add In</h3>
                {this.state.message}
            </div>
        );
    }
}

export default AddIn;