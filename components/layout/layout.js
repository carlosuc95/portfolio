import { Fragment } from "react";
import Header from "./header";
import MainHeader from "./main-header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
