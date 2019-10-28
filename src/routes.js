import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Home from "./components/landing/Home";
import Authenticated from "./components/reusable/HOC/Authenticated";
import AdminRoutes from "./components/private/AdminRoutes";
import ModalManager from "./components/reusable/modalManager/modalManager";
import NotFound from "./components/NotFound";
import { trackGoogleAnalytics } from "./services/ga/ga";

class Routes extends React.Component {
	componentDidMount = () => {
		window.ga("create", "", "auto");
	};

	render() {
		trackGoogleAnalytics(this.props.location);

		return (
			<Fragment>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<AdminRoutes />
					<Route path="*" component={NotFound} />
				</Switch>
				<MessengerCustomerChat pageId="" appId="" htmlRef="" />
			</Fragment>
		);
	}
}

export default withRouter(Routes);
