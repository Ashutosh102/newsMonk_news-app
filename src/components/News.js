import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
export class News extends Component {
  // static defaultProps={
  //   country:"in",
  //   pageSize:8
  // }
//  static propTypes={
//    pageSize:this.PropTypes.number,
//    country:this.PropTypes.string

//  }
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articles: [],
      pg: 1,
      totalArticles: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  // function to handle next and previous.
  async handleNext() {
    window.scrollTo(0,0);//scrolls to top on rendering.
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f59178ab70df48bc83797911eebc20d9&page=${
      this.state.pg + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      pg: this.state.pg + 1,
      articles: parsedData.articles,
      loading: false,
    });
  }
  async handlePrevious() {
    window.scrollTo(0,0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f59178ab70df48bc83797911eebc20d9&page=${
      this.state.pg - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      pg: this.state.pg - 1,
      articles: parsedData.articles,
      loading: false,
    });
  }

  //render
  render() {
    return (
      <>
        <div className="container my-3">
          <div className="text-center headline">
            <h1>Top Headlines</h1>
          </div>
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((items, id) => {
              return (
                <div className="col-md-4 col-sm-6 col-xs-12" key={items.url}>
                  <NewsItem
                    title={(items.title ? items.title.slice(0, 45) : "") + ".."}
                    description={
                      (items.description
                        ? items.description.slice(0, 85)
                        : "") + "..."
                    }
                    imageURL={
                      items.urlToImage
                        ? items.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/120px-No_image_available.svg.png"
                    }
                    newsURL={items.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-fluid page-button my-4 mx-2">
          <button
            disabled={this.state.pg <= 1}
            className="btn-sm btn btn-info text-light mx-5 "
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <div className="page-count">{this.state.pg}</div>
          <button
            disabled={
              !(this.state.pg + 1 <= Math.ceil(this.state.totalArticles / 12))
            }
            className="btn-sm btn btn-info text-light mx-5"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
  async componentDidMount() {
    window.scrollTo(0,0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=f59178ab70df48bc83797911eebc20d9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }
}

export default News;
