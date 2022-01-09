import "./App.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AppLayout from "./layouts/AppLayout";
import { BrowserRouter, Route } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import { connect } from "react-redux";
import { add, minus, addAllData } from "./redux/actions/action.js";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import i18n from "./translate/i18next";
import { useTranslation } from "react-i18next";
import Loading from "./components/common/Loading";
import DashboardLayout from "./layouts/DashboardLayout";
import VideoLayout from "./layouts/VideoLayout";
import Video from "./components/Video";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);

function App(props) {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const posts = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      fetch("https://my-json-server.typicode.com/A-Wadi/Fake-API/aflam")
        .then((res) => {
          setError(null);
          if (!res.ok) {
            throw Error(res.statusText ? res.statusText : t("error-get-data"));
          }
          return res.json();
        })
        .then((json) => {
          dispatch(addAllData(json));
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 10); // jsut for show loading at least 1 second
  }, ["https://my-json-server.typicode.com/A-Wadi/Fake-API/aflam"]);

  return (
    <React.Fragment>
      {loading ? <Loading /> : null}

      {!loading && error && (
        <div className="msg-error">
          <p>{error}</p>
        </div>
      )}

      <BrowserRouter>
        <AppRoute exact path="/" layout={AppLayout} component={Home} />
        <AppRoute
          exact
          path="/dashboard"
          layout={DashboardLayout}
          component={Dashboard}
        />
        <AppRoute path="/login" layout={LoginLayout} component={Login} />
        <AppRoute path="/video/:id" layout={VideoLayout} component={Video} />
      </BrowserRouter>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    adddata: () => dispatch(addAllData()),
    inc: () => dispatch(add()),
    min: () => dispatch(minus()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
