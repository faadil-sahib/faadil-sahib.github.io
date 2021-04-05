import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Blog from "./components/blog";
import AboutMe from "./components/aboutMe";

export default class App extends Component {
	state = {
		blogs: [
			{
				id: 1,
				title: ".NET Core Clean Architecture pattern",
				description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Iaculis at erat pellentesque adipiscing. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus vitae. Augue eget arcu dictum varius. At urna condimentum mattis pellentesque id. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Egestas integer eget aliquet nibh praesent. In iaculis nunc sed augue lacus viverra vitae. A condimentum vitae sapien pellentesque. Diam in arcu cursus euismod quis viverra nibh cras. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Vulputate eu scelerisque felis imperdiet proin.

					Massa sapien faucibus et molestie. Laoreet suspendisse interdum consectetur libero. Eget aliquet nibh praesent tristique magna. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Vitae elementum curabitur vitae nunc. Mauris pharetra et ultrices neque ornare aenean euismod. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Convallis aenean et tortor at. Pretium aenean pharetra magna ac placerat. Tellus integer feugiat scelerisque varius morbi enim. Bibendum arcu vitae elementum curabitur vitae. Eget felis eget nunc lobortis mattis aliquam faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Odio tempor orci dapibus ultrices in.
					
					Turpis massa tincidunt dui ut. Est sit amet facilisis magna etiam tempor orci eu. Feugiat in ante metus dictum at. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Tempor id eu nisl nunc mi. Vestibulum mattis ullamcorper velit sed ullamcorper. Mattis vulputate enim nulla aliquet porttitor lacus luctus. A lacus vestibulum sed arcu non odio. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Bibendum neque egestas congue quisque. Ac tincidunt vitae semper quis lectus.
					
					In egestas erat imperdiet sed euismod nisi porta lorem. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Orci porta non pulvinar neque laoreet. Laoreet sit amet cursus sit. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Ornare arcu odio ut sem nulla pharetra diam sit amet. Iaculis urna id volutpat lacus laoreet non. Senectus et netus et malesuada fames. Morbi quis commodo odio aenean sed adipiscing. Dui sapien eget mi proin sed libero. Diam in arcu cursus euismod quis viverra. Quis lectus nulla at volutpat diam. Elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit. Hac habitasse platea dictumst vestibulum rhoncus. Ut aliquam purus sit amet.
					
					In vitae turpis massa sed. Cras sed felis eget velit aliquet sagittis id consectetur. Sit amet venenatis urna cursus eget nunc scelerisque. A scelerisque purus semper eget duis at tellus at urna. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Pellentesque habitant morbi tristique senectus. Ac felis donec et odio. Senectus et netus et malesuada fames ac. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Commodo sed egestas egestas fringilla. Vitae et leo duis ut. Orci sagittis eu volutpat odio facilisis. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nec ullamcorper sit amet risus nullam eget felis eget. Purus faucibus ornare suspendisse sed nisi lacus sed. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Facilisi nullam vehicula ipsum a arcu cursus vitae. Consequat interdum varius sit amet mattis vulputate. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.`,
				tags: ["C#", ".NET"],
				quote:
					'"Decoupling is the fundamental goal of good architecture."',
			},
			{
				id: 2,
				title: "Building React applications",
				description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Nunc sed augue lacus viverra vitae congue eu consequat ac. Curabitur gravida arcu ac tortor. Lacus vel facilisis volutpat est velit egestas dui id ornare. Pretium viverra suspendisse potenti nullam ac. Risus sed vulputate odio ut enim blandit volutpat. Augue eget arcu dictum varius duis at consectetur. Id interdum velit laoreet id donec ultrices. Nisl rhoncus mattis rhoncus urna.

				Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Lectus urna duis convallis convallis tellus id. Semper quis lectus nulla at volutpat diam ut venenatis. Cras semper auctor neque vitae tempus quam pellentesque nec. Condimentum id venenatis a condimentum vitae. Volutpat consequat mauris nunc congue nisi vitae. At augue eget arcu dictum. Elit sed vulputate mi sit amet mauris. Viverra maecenas accumsan lacus vel facilisis volutpat. Morbi tristique senectus et netus.
				
				Varius vel pharetra vel turpis. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Erat imperdiet sed euismod nisi. Aliquam malesuada bibendum arcu vitae. Felis eget nunc lobortis mattis aliquam. At imperdiet dui accumsan sit amet nulla facilisi. Viverra adipiscing at in tellus. Eget sit amet tellus cras adipiscing enim. Sed sed risus pretium quam vulputate dignissim suspendisse. Diam quis enim lobortis scelerisque fermentum. Sollicitudin nibh sit amet commodo nulla facilisi. Lectus mauris ultrices eros in cursus turpis. Egestas diam in arcu cursus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Nunc scelerisque viverra mauris in aliquam sem. Laoreet non curabitur gravida arcu ac tortor dignissim. Tellus pellentesque eu tincidunt tortor aliquam nulla. Tristique senectus et netus et malesuada fames ac.
				
				Rhoncus mattis rhoncus urna neque viverra justo nec. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc congue nisi vitae suscipit tellus. Interdum velit laoreet id donec ultrices. Interdum velit laoreet id donec ultrices tincidunt arcu non. Augue ut lectus arcu bibendum. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Justo nec ultrices dui sapien eget mi. Feugiat nisl pretium fusce id velit. Eu volutpat odio facilisis mauris sit amet massa vitae. Leo urna molestie at elementum eu facilisis sed odio. Morbi leo urna molestie at elementum eu. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nullam eget felis eget nunc lobortis mattis. Volutpat diam ut venenatis tellus in metus vulputate. Vulputate dignissim suspendisse in est ante.
				
				Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Pretium nibh ipsum consequat nisl vel. Sagittis nisl rhoncus mattis rhoncus. Amet purus gravida quis blandit turpis cursus in hac. Lacus viverra vitae congue eu consequat ac. Sodales ut etiam sit amet nisl purus in. Eu tincidunt tortor aliquam nulla. Lorem mollis aliquam ut porttitor leo a diam. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Viverra justo nec ultrices dui sapien. Elit eget gravida cum sociis natoque penatibus. Sed elementum tempus egestas sed sed risus pretium quam. Tempus urna et pharetra pharetra massa massa ultricies mi quis.`,
				tags: ["React", "Web"],
				quote: '"Knowing a popular web framework never hurt anybody."',
			},
			{
				id: 3,
				title: "Using SignalR to get live updates from database",
				description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet porttitor lacus luctus accumsan. Ut eu sem integer vitae justo eget magna fermentum. Massa placerat duis ultricies lacus. Non arcu risus quis varius quam quisque. Viverra tellus in hac habitasse. Luctus accumsan tortor posuere ac ut. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Quis auctor elit sed vulputate. Semper eget duis at tellus. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Semper viverra nam libero justo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Mauris sit amet massa vitae tortor. At tellus at urna condimentum mattis pellentesque id nibh. Lorem sed risus ultricies tristique nulla aliquet.

				At in tellus integer feugiat scelerisque varius morbi enim. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Porta non pulvinar neque laoreet suspendisse. Tincidunt id aliquet risus feugiat in ante metus dictum. Lorem donec massa sapien faucibus et. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Tellus elementum sagittis vitae et leo duis. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tristique senectus et netus et malesuada fames ac turpis egestas. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. In hendrerit gravida rutrum quisque non tellus orci ac. Nunc lobortis mattis aliquam faucibus purus in. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Lectus mauris ultrices eros in cursus turpis. Id ornare arcu odio ut sem nulla. Et netus et malesuada fames. Pellentesque habitant morbi tristique senectus. Purus sit amet luctus venenatis lectus magna.
				
				Molestie at elementum eu facilisis sed odio. Risus viverra adipiscing at in tellus integer feugiat. Dictum non consectetur a erat. Volutpat blandit aliquam etiam erat velit scelerisque in. Sit amet dictum sit amet justo. Sit amet consectetur adipiscing elit ut aliquam purus sit. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Viverra nam libero justo laoreet sit amet cursus sit. Natoque penatibus et magnis dis parturient. Quis risus sed vulputate odio ut. Est pellentesque elit ullamcorper dignissim cras tincidunt. Tempus egestas sed sed risus pretium quam. Morbi non arcu risus quis. Nisl nunc mi ipsum faucibus vitae aliquet nec. Integer malesuada nunc vel risus commodo viverra maecenas accumsan.
				
				Enim nunc faucibus a pellentesque sit amet porttitor eget. Eget dolor morbi non arcu risus quis. Eu sem integer vitae justo eget magna fermentum iaculis eu. Gravida rutrum quisque non tellus orci. Tortor id aliquet lectus proin nibh. Consectetur purus ut faucibus pulvinar. Egestas congue quisque egestas diam in arcu cursus euismod. Amet justo donec enim diam vulputate ut pharetra sit amet. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Donec enim diam vulputate ut pharetra sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat. Lorem ipsum dolor sit amet consectetur adipiscing.`,
				tags: ["C#", "SQL"],
				quote:
					'"You don\'t call your database. Your database calls you."',
			},
		],
	};

	render() {
		return (
			<React.Fragment>
				<NavBar />
				<main
					className='container-fluid p-0' // p-0
					style={{ overflowX: "hidden" }}>
					<div>
						<Switch>
							<Route
								path='/blog/:blogid'
								render={(props) => (
									<Blog
										{...props}
										blogItems={this.state.blogs}
									/>
								)}
							/>
							<Route
								path='/blog'
								render={(props) => (
									<Blog
										{...props}
										blogItems={this.state.blogs}
										mainQuote={"Enlighten ourselves."}
										mainSubQuote={
											'"It is a two-way street. This is me attempting to give back to the community that taught me."'
										}
									/>
								)}
							/>
							<Route path='/aboutme' component={AboutMe} />
							<Route
								path='/'
								render={(props) => (
									<Home
										{...props}
										blogItems={this.state.blogs}
									/>
								)}
							/>
						</Switch>
					</div>
				</main>
			</React.Fragment>
		);
	}
}
