import React, { Component } from "react";
import articles from "../sample";
import NewsItem from "./NewsItem";
export class News extends Component {
  sample = articles;
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articles: this.sample,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h3>Top Headlines</h3>
        <div className="row" >
        {this.state.articles.map((items,id) => {
          return (
           
              <div className="col-md-4" key={items.url}>
                <NewsItem
                  title={items.title.slice(0,45)+".."}
                  description={items.description.slice(0,85) +"..."}
                  imageURL={items.urlToImage}
                  newsURL={items.url}
                />
              </div>
           
          );
        })}
        </div>
      </div>
    );
  }
}

export default News;
