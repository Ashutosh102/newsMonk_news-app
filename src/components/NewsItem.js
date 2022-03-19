import React, { Component } from "react";

export class NewsItem extends Component {

  

  render() {
    return (
      <div className="my-3">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.imageURL}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.newsURL} target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
