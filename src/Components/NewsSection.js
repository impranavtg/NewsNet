import React, { Component } from "react";
import NewsCard from "./NewsCard";
import "../Css/NewsSection.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsSection extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: "",
      loading: false,
      totalResults: 0,
    };
  }
  static defaultProps = {
    country: "in",
    category: "top",
    page: "1",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };


  async componentDidMount() {
    this.props.setProgress(30);
    const url=`https://newsdata.io/api/1/news?apikey=${this.props.api}&country=${this.props.country}&category=${this.props.category}&language=en`;
    this.setState({ loading: true });
    // let data = await fetch(url,{mode:"no-cors"}).then(response => console.log(response));
    fetch(url).then(res => res.json()).then(json => {
                this.setState({
      articles: json.results,
      page: json.nextPage,
      totalResults: json.totalResults,
      loading: false,
    })})
    
    
    // let parsedJsonData = await data.json();
    this.props.setProgress(70);
    // this.setState({
    //   articles: parsedJsonData.results,
    //   totalResults: parsedJsonData.totalResults,
    //   loading: false,
    // });
    this.props.setProgress(100);
  }
  fetchMoreData = async () => {
    const url=`https://newsdata.io/api/1/news?apikey=${this.props.api}&country=${this.props.country}&category=${this.props.category}&language=en&page=${this.state.page}`;

    this.setState({ page: this.state.page + 1 });
    fetch(url).then(res => res.json()).then(json => {
                this.setState({
      articles: this.state.articles.concat(json.results),
       page: json.nextPage
    });})
    // let data = await fetch(url);
    // let parsedJsonData = await data.json();
    // this.setState({
    //   articles: this.state.articles.concat(parsedJsonData.results)
    // });
  };
  render() {
    return (
      <>
        <div className="heading" style={this.props.theme}>
          <h2>
            {this.props.category === "top"
              ? "Top Headlines"
              : `Top ${
                  this.props.category[0].toUpperCase() +
                  this.props.category.substring(1)
                } Headlines`}
          </h2>
        </div>
        {this.state.loading && <Spinner theme={this.props.theme}/>}
        <InfiniteScroll
          dataLength={this.state.articles?.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div className="newsContainer" style={this.props.theme}>
            {this.state.articles
              ? this.state.articles.map((element) => {
                  return (
                    <NewsCard
                      title={element.title}
                      description={element?.description}
                      imgUrl={element.image_url}
                      key={element.link}
                      myUrl={element.link}
                      author={element.source_id}
                      date={element.pubDate}
                   />
                  );
                })
              : ""}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
