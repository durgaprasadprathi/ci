import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";
import Notification from "./components/notification/index";
import Loader from "./components/spinner/index";

// Import scss
import "./assets/scss/theme.scss";

//Fake backend
import fakeBackend from './helpers/AuthType/fakeBackend';
import "./App.css";

//Firebase helper
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Activating fake backend
fakeBackend();

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_APIKEY,
// 	authDomain: process.env.REACT_APP_AUTHDOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASEURL,
// 	projectId: process.env.REACT_APP_PROJECTID,
// 	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
// 	appId: process.env.REACT_APP_APPID,
// 	measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getLayout = this.getLayout.bind(this);
	}

	
	getLayout = () => {
		return VerticalLayout;
	};

	render() {
		const Layout = this.getLayout();
		console.log(this.props.apiCall)
		return (
			<React.Fragment>
				{
					this.props.apiCall.message ? <Notification body={this.props.apiCall.message}  type={"success"} /> : null
				}
				{
					this.props.apiCall.error ? <Notification body={this.props.apiCall.error}  type={"error"} /> : null
				}
				{
					this.props.apiCall.loading ? <Loader active={this.props.apiCall.loading} /> : null
				}
				
				<Router>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={NonAuthLayout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}

						{authProtectedRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={Layout}
								component={route.component}
								key={idx}
								isAuthProtected={true}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout,
		apiCall: state.APICall
	};
};


export default connect(mapStateToProps, null)(App);
