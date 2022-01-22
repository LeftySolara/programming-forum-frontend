import React, { forwardRef, useMemo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { ListItem, ListItemText } from "@mui/material";

/**
 * A link rendered in the NavBar.
 *
 * @param {String} props.primary The text displayed for the link.
 * @param {String} props.to The link path.
 *
 * @returns A ListItem that renders a link with the given text and path.
 */
const NavBarLink = (props) => {
  const { primary, to } = props;

  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <NavLink to={to} ref={ref} {...itemProps} role={undefined} />
      )),
    [to],
  );

  return (
    <ListItem button component={renderLink}>
      <ListItemText primary={primary} />
    </ListItem>
  );
};

NavBarLink.propTypes = {
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavBarLink;
