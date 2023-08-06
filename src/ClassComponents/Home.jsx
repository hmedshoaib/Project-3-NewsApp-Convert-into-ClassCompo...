import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem'
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalresult: 0
    }
  }
  getAPIData = async () => {
    var response = ""
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&pageSize=18&language=${this.props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=1&pageSize=18&language=${this.props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    var result = await response.json()
    this.setState({
      articles: result.articles,
      totalresult: result.totalresult,
      page: 1
    })
  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    var response = ""
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=18&language=${this.props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=18&language=${this.props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    var result = await response.json()
    this.setState({ articles: this.state.articles.concat(result.articles) })
  }


  componentDidMount() {
    this.getAPIData()
  }

  componentDidUpdate(oldprops) {
    if (this.props !== oldprops)
      this.getAPIData()
  }
  render() {
    return (
      <>
        <div className="container-fluid">

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            // hasMore={this.state.articles.length < this.state.totalresult}
            hasMore={true}
            loader={
              <div>
                <button className="btn background " type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className="visually-hidden">Loading...</span>
                </button>
                <button className="btn btn-smbackground" type="button" disabled>
                  <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                  Loading...
                </button>
              </div>
            }
          >
            <div className="row">
              <h6 className='text-center bg p-2'>NewsSection:{this.props.q}</h6>
              {
                this.state.articles.map((item, index) => {
                  return <NewsItem
                    key={index}
                    pic={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    source={item.source.name}
                    date={item.publishedAt}
                    url={item.url}
                  />

                })
              }
            </div>
          </InfiniteScroll >
        </div >
      </>
    )
  }
}
