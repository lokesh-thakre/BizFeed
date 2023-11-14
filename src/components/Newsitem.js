import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description, urlToImage, url} = this.props;
       return (
      <div className='my-3'>
        <div className="card" style={{width: "100%", height: "100%"}}>
  <img src ={!urlToImage?'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/xiaomi-14-274907194-16x9_0.png?VersionId=.wTOuSzLP1v6Gml3lu0eKroG7m9hSzbs':urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}..</h5>
    <p className="card-text">{description}..</p>
    <a rel="noreferrer" href={url} className="btn btn-primary">Read More..</a>
  </div>
</div></div>
    )
  }
}

export default NewsItem