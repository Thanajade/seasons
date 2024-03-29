import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {

    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            (err) => {
                this.setState({
                    errorMessage: err.message
                });
            }
        );
    }

    render() {

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        }

        if (!this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <div>Loading</div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));