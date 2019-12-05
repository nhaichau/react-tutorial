import React from "react";

class ClassApp extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Test",
            age: 13,
            isLoggedIn: true
        }
    }

    render() {
        let wordDisplay = this.state.isLoggedIn ? "in" : "out";
        return (
            <div>
                <h1>{this.state.name} is {this.state.age} years old</h1>
                <h2>User is currently logged {wordDisplay}</h2>
            </div>
        )
    }
}

export default ClassApp;