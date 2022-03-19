import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
export class News extends Component {
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
    window.scrollTo(0, 0); //scrolls to top on rendering.
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=f59178ab70df48bc83797911eebc20d9&page=${
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
    window.scrollTo(0, 0);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=f59178ab70df48bc83797911eebc20d9&page=${
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
      {/* headline */}
        <div className="container my-3">
          <div className="text-center headline">
          
            <h1>{this.props.category.charAt(0).toUpperCase() +this.props.category.slice(1)}</h1>
          </div>
          {/* spinner */}
          {this.state.loading && <Loading />}
          <div className="row">
          {/* news items mapping */}
            {!this.state.loading &&
              this.state.articles.map((items, id) => {
                return (
                  <div className="col-md-4 col-sm-6 col-xs-12" key={items.url}>
                    <NewsItem
                      title={
                        (items.title ? items.title.slice(0, 45) : "") + ".."
                      }
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
        {/* previous pgno. and next buttons */}
        <div className="container-fluid page-button my-4 mx-2">
          <button
            disabled={this.state.pg <= 1}
            className="btn-sm btn btn-color mx-5 "
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <div className="page-count">{this.state.pg}</div>
          <button
            disabled={
              !(this.state.pg + 1 <= Math.ceil(this.state.totalArticles / 12))
            }
            className="btn-sm btn btn-color mx-5"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }

  //didMount
  async componentDidMount() {
    window.scrollTo(0, 0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f59178ab70df48bc83797911eebc20d9&page=1&pageSize=${this.props.pageSize}`;
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

//Proptypes.
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string,
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category:"science"
};

export default News;
