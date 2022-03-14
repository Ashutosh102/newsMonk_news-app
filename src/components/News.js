import React, { Component } from "react"
import NewsItem from "./NewsItem";
export class News extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      articles:[],
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h3>Top Headlines</h3>
        <div className="row" >
        {this.state.articles.map((items,id) => {
          return (
           
              <div className="col-md-4 col-sm-6 col-xs-12" key={items.url}>
                <NewsItem
                  title={ (items.title?items.title.slice(0,45):"")+".."}
                  description={(items.description?items.description.slice(0,85):"") +"..."}
                  imageURL={items.urlToImage?items.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/120px-No_image_available.svg.png"}
                  newsURL={items.url}
                />
              </div>
           
          );
        })}
        </div>
      </div>
    );
  }
  async componentDidMount(){
    const url='https://newsapi.org/v2/top-headlines?country=in&apiKey=f59178ab70df48bc83797911eebc20d9';
    let data =await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData.articles);
    this.setState({articles:parsedData.articles})
    
 }
}

export default News;
