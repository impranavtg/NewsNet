import "./App.css";
import NavBar from "./Components/NavBar";
import NewsSection from "./Components/NewsSection";
import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countryNews: "in",
    };
    this.state = {
      themechanger: "Light",
      style: {
        color: "black",
        backgroundColor: "#eeeeee",
      },
    };
  }
  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  themeExhcnage = (theme) => {
    if (theme === "Dark") {
      this.setState({
        themechanger: "Dark",
        style: {
          backgroundColor: "#1A374D",
        },
      });
      document.body.style.backgroundColor = "#1A374D";
    } else {
      this.setState({
        themechanger: "Light",
        style: {
          backgroundColor: "#eeeeee",
        },
      });
      document.body.style.backgroundColor = "#eeeeee";
    }
  };
  dataExchange = (data) => {
    this.setState({
      countryNews: data,
    });
  };
  apiKey = "pub_4486c52b67b16592ce92d51cb720018ce8f0";
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <NavBar func={this.dataExchange} func2={this.themeExhcnage} />
          <LoadingBar color="#FF2626" progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              element={
                <NewsSection
                  key={`${this.state.countryNews}general`}
                  country={this.state.countryNews}
                  api={this.apiKey}
                  category="top"
                  theme={this.state.style}
                  loading={this.state.loader}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <NewsSection
                  key={`${this.state.countryNews}sports`}
                  country={this.state.countryNews}
                  api={this.apiKey}
                  category="sports"
                  theme={this.state.style}
                  loading={this.state.loader}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/business"
              element={
                <NewsSection
                  key={`${this.state.countryNews}business`}
                  country={this.state.countryNews}
                  api={this.apiKey}
                  category="business"
                  theme={this.state.style}
                  loading={this.state.loader}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <NewsSection
                  key={`${this.state.countryNews}entertainment`}
                  country={this.state.countryNews}
                  api={this.apiKey}
                  category="entertainment"
                  theme={this.state.style}
                  loading={this.state.loader}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/health"
              element={
                <NewsSection
                  key={`${this.state.countryNews}health`}
                  country={this.state.countryNews}
                  api={this.apiKey}
                  category="health"
                  theme={this.state.style}
                  loading={this.state.loader}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/science"
              element={
                <NewsSection
                  key={`${this.state.countryNews}science`}
                  country={this.state.countryNews}
                  api={this.apiKey}
                  category="science"
                  theme={this.state.style}
                  loading={this.state.loader}
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <NewsSection
                  key={`${this.state.countryNews}technology`}
                  country={this.state.countryNews}
                  api={this.apiKey}
                  category="technology"
                  theme={this.state.style}
                  loading={this.state.loader}
                  setProgress={this.setProgress}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
