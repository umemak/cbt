import React, { useContext } from "react";
import router from "next/router";
import { auth } from "../pages/_app";
import { UserContext } from "../pages/_app";

const withAuth = Component => {
  // const { user } = useContext(UserContext);
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: "LOADING"
      };
    }
    componentDidMount() {
      auth.onAuthStateChanged(() => {
        if (true || user) {
          this.setState({
            status: "SIGNED_IN"
          });
        } else {
          router.push("/signin");
        }
      });
    }
    renderContent() {
      const { status } = this.state;
      if (status == "LOADING") {
        return <h1>Loading ......</h1>;
      } else if (status == "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    }
    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};
export default withAuth;
