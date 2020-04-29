import React from "react";

import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            ghUser: {},
            followers: []
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/tristangrovender")
            .then(res => res.json())
            .then(user => {
                console.log(user);
                this.setState({ ghUser: user });
            })
            .catch(err => console.log("Error fetching data"));
        fetch("https://api.github.com/users/tristangrovender/followers")
            .then(res => res.json())
            .then(associates => {
                console.log(associates);
                this.setState({ followers: associates });
            })
            .catch(err => console.log("Error fetching data"));
    }

    render() {
        return (
            <div className="App">
                <h1>Github user:</h1>
                <img
                    width="100"
                    height="100"
                    src={this.state.ghUser.avatar_url}
                    key={this.state.ghUser.id}
                    alt={this.state.ghUser.name}
                />
                <h2>Followers:</h2>
                {this.state.followers.map(associate => (
                    <img
                        width="100"
                        height="100"
                        src={associate.avatar_url}
                        key={associate.id}
                        alt={associate.name}
                    />
                ))}
            </div>
        );
    }
}

export default App;
