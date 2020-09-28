import React, { Fragment, Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/landing/Home";
import Authenticated from "./components/reusable/HOC/Authenticated";
import ModalManager from "./components/reusable/modalManager/modalManager";
import NotFound from "./components/NotFound";
import { connect } from "react-redux";
import { trackGoogleAnalytics } from "./external/ga/ga";
import { Helmet } from "react-helmet";
class Routes extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount = () => {
    /**
     * INITIAL LOADING SET UP
     */
    setInterval(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  };

  /**
   * LOADER FUNCTION
   */
  renderLoader = () => {
    return (
      <div className="d-flex justify-content-center align-items-center h-100vh">
        <h2>Black Helio</h2>
      </div>
    );
  };

  render() {
    // trackGoogleAnalytics(this.props.location);
    if (this.state.loading) {
      return this.renderLoader();
    } else {
      return (
        <Suspense fallback={this.renderLoader()}>
          <Fragment>
            <Helmet>
              <title>Lay Chin Pay</title>
              <meta name="" />
              <meta name="keywords" content="" />
            </Helmet>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home isMobile={this.props.isMobile} />}
              />

              <Route path="*" component={NotFound} />
            </Switch>
          </Fragment>
        </Suspense>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isMobile: state.browser.orientation === "portrait",
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
