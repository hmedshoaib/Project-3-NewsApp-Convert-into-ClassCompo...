import React, { useState, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem"
export default function Home(props) {


  var [articles, setarticles] = useState([])
  var [totalresult, settotalresult] = useState(0)
  var [page, setpage] = useState(1)
  const getAPIData = async () => {
    var response = ""
    if (props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=1&pageSize=18&language=${props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&pageSize=18&language=${props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    var result = await response.json()
    setarticles(result.articles)
    settotalresult(result.totalresult)
  }


  const fetchMoreData = async () => {
    setpage(page + 1)
    var response = ""
    if (props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&pageSize=18&language=${props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&pageSize=18&language=${props.language}&apiKey=851b6fc4b66245d09d5a9d02e1067aca`)
    var result = await response.json()
    setarticles(articles.concat(result.articles))
  }
  useEffect(() => {
    getAPIData()
  }, [props])
  return (
    <>
      <div className="container-fluid">

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          // hasMore={articles.length < totalresult}
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
            <h6 className='text-center bg p-2'>NewsSection:{props.q}</h6>
            {
              articles.map((item, index) => {
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
