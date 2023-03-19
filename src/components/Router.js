import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Router(props) {
  const { to, children, ...rest } = props;

  return (
    <Link to={to}>
      <Nav.Link {...rest}>{children}</Nav.Link>
    </Link>
  );
}

export default Router;
