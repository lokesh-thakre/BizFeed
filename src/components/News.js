import React, { Component } from 'react'
import NewsItem from './Newsitem'
import PropTypes from 'prop-types'; 
import Loader from './Loader';
export class News extends Component {

    static defaultProps = {
      country:'in',
      pageSize: 6,
      category : 'General',

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
      }
constructor(){
    super();
    console.log("Hello Im a News component");
    this.state = {
      articles: [],
        loadingg:false,
        page:1
    }
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e211c559b3646a4883e0845e08ce6db&page=1&pageSize=${this.props.pageSize}`;

    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles:parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading: false,
    })

}
handlePrevClick = async () =>{
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e211c559b3646a4883e0845e08ce6db&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
    })



}
  handleNextClick = async () => {
    console.log("Next");
   if (!(this.state.page+1> Math.ceil(this.state.totalResults / this.props.pageSize))) {
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e211c559b3646a4883e0845e08ce6db&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,

    })


}
}

  render() {
    console.log("render");
    return (
       <div className='container my-3'>
        <h2 className='text-center'>NewsHub - Top Headlines</h2>
       {this.state.loading && <Loader/>}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                {/* url is unique,so taken as key */}
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} urlToImage={element.urlToImage} url={element.url}/>                
            </div>

            })}
            
            
        </div>
        <div className='container'>
        {/* <h1 className='text-center'>NewsDaily - Top Headlines</h1> */}
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#129026;</button>
        </div>
        </div>
        </div>
        
      

    )
  }
}

export default News