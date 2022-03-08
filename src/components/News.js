import React, { Component } from "react";
import articles from "../sample";
import NewsItem from "./NewsItem";
export class News extends Component {
   sample=articles;
  constructor(props){
    super(props);
    this.state={
        loading:false,
        articles:[this.sample]
    }
  console.log(this.state.articles)
  }

  render() {
    return (
      <div className="container my-3">
        <h3>Top Headlines</h3>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="description"
              imageURL="https://static01.nyt.com/images/2022/03/07/business/00russiaoil-1/00russiaoil-1-facebookJumbo.jpg"
              itemId=""
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="description" imageURL="" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="description" imageURL="" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="description" imageURL="" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
