import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
 const [articles,setArticles]=useState([]);
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,setTotalREsults]=useState(0)


 
useEffect(() => {
  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=82fad49f5b3e45beb6c15a12ec4e1cf2&pageSize=${props.pageSize}`;
  // let data=await fetch(url);
  // setState({loading:true})
  // let parsedData=await data.json()
  // console.log(parsedData)
  // setState({articles:parsedData.articles,
  //   totalResults:parsedData.totalResults,loading:false
  // })
  document.title=`${props.category.charAt(0).toUpperCase() +props.category.slice(1)}
  -NewsMonkey`
  Newsupdate();
// eslint-disable-next-line 
},[]);

   
  const Newsupdate=async()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.url}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    setLoading(true)
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalREsults(parsedData.totalREsults)
    setLoading(false)
    console.log(parsedData);

   
    props.setProgress(100)

  }
//  const onNextpage = async () => {
//         if(!(state.page + 1 > Math.ceil(totalResults/props.pageSize))) {

//         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.url}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//         let data=await fetch(url);
//         setState({loading:true})
//         let parsedData=await data.json()
//        console.log(parsedData)
//     console.log("Next")
//     this.setState({
//       page:this.state.page+1,
//       articles:parsedData.articles,
//       loading:false

//     })
//         }
//     setPage(page+1)
//    Newsupdate();
//   };
//  const onPrevpage = async () => {
//         console.log("Previous")
//         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.url}&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//         let data=await fetch(url);
//         this.setState({loading:true})
//         let parsedData=await data.json()
//        console.log(parsedData)
//     this.setState({
//       page:this.state.page-1,
//       articles:parsedData.articles,loading:false
//     })
//     setPage(page-1)
//    Newsupdate();
//   };
 const fetchMoreData=async()=>{
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.url}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setArticles(articles.concat(parsedData.articles))
  setTotalREsults(parsedData.totalResults)
 
}
 
    return (
      <>
        <div className="my-4">
          <h1 className="text-center" style={{ marginTop: "80px" }}>
            NewsMonkey -Top {props.category.charAt(0).toUpperCase() +props.category.slice(1)} Headlines
          </h1>
         
            {loading && <Spinner />}
          
          <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
   
    hasMore={articles.length!==totalResults}
    
    loader={<Spinner/>}
    // scrollableTarget="scrollableDiv"
  >
    <div className="container">
          <div className="row">
            {
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      author={element.author}
                      date={element.publishedAt}
                      title={element.title ? element.title.slice(0, 30) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div></div>
          </InfiniteScroll>
        </div>
        <div className="container d-flex justify-content-between">
          {/* <button
            disabled={page <= 1}
            type="button"
            onClick={onPrevpage}
            className="btn btn-dark"
          >
            &larr;Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(.totalResults / props.pageSize)
            }
            type="button"
            onClick={onNextpage}
            className="btn btn-dark"
          >
            Next&rarr;
          </button> */}
        </div>
      </>
    );
  
        }
export default News

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};