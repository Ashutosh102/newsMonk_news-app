import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    //  const {title,description}=this.props;
    return (
    
        <div className="card" style={{width: "15rem"}}>
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              {this.props.description}
            </p>
            <a href="#" className="btn btn-sm btn-primary">
             ReadMore
            </a>
          </div>
        </div>
       
     
    );
  }
}

export default NewsItem;
