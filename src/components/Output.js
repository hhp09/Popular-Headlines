import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';

// Note: updating state of articles in the array (re-rendering)

// Component Lifecycle Method: 3 categories (mounting, updating, unmounting, and not forgetting render())
//  1) componentDidMount: sit and wait for updates (also defines the birth of a component)
//  2) componentDidUpdate: a good place to do more data loading when state/props change (further growth of components)
//  3) componentWillUnmount: cleanup of components that are no longer required

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        this.getArticles(this.props.default);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&apiKey=773631ba5bf24bffac30f87473bec958`
            });
            this.getArticles(nextProps.default);
        }
    }

    getArticles(url) {
        this.setState({ articles: [] });
        const API = '773631ba5bf24bffac30f87473bec958';
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=${API}`)
            .then((response) => {
                const data = response.data.articles;
                this.setState({ articles: data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const articleState = this.state.articles;
        let views = <div>Generating Results...</div>
        if (articleState && articleState.length > 1) {
            views = Object.keys(articleState).map(article => <Article key={article} details={articleState[article]} />)
        }
        return (
            <div className="container">
                <div className="row">
                    <br />
                    <br />
                    {views}
                </div>
            </div>
        )
    }
}

export default Output;