import React, { Component } from 'react';
import axios from 'axios';
import Output from './Output';

class BrowseSelect extends Component {
    constructor(props) {
        // Pass props to parent class
        super(props);
        this.state = {
            data: [],
            value: this.props.default,
        }
        this.onChange = this.onChange.bind(this);
        this.apiUrl = 'https://newsapi.org/v2/sources?language=en&apiKey=773631ba5bf24bffac30f87473bec958';
    }
    // Handle the Select Change from the Select Options
    onChange(event) {
        this.setState({ value: event.target.value });
    }

    //Get News Sources from the API
    componentDidMount() {
        axios.get(this.apiUrl)
            .then((response) => {
                let sourcesData = response.data;
                this.setState({ data: sourcesData.sources });
            })
    }

    // Render Method
    render() {
        const allSources = this.state.data;
        return (
            <div>
              <div className="row text-center">
              <div className="col-lg-12">
                <select value={this.state.value} onChange={this.onChange}>
                    {
                        Object.keys(allSources).map(paper => <option key={paper} value={allSources[paper].id}>{allSources[paper].name}</option>)
                    }
                </select>
                </div>
              </div>
              <br />
              <br />
              <div className="row">
                    <br />
                    <br />
                    <Output default={this.state.value} />
                    <br />
                </div>
                <br />
            </div>
        );
    }
}

export default BrowseSelect;