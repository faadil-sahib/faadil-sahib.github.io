import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import "./App.css";
import Home from "./components/home";
import Blog from "./components/blog";
import AboutMe from "./components/aboutMe";

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<div style={{ position: "sticky" }}>One of three columns</div>
				<main
					className='container-fluid p-0'
					style={{ overflowX: "hidden" }}>
					<BrowserRouter>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/blog' component={Blog} />
							<Route path='/aboutme' component={AboutMe} />
						</Switch>
					</BrowserRouter>
				</main>
			</React.Fragment>
		);
	}
}
