import React from "react";
import {Dropdown} from "semantic-ui-react";
import {useSelector} from "react-redux";

export function LoggedInDropdown() {
  const user = useSelector(state => state.user);
  console.log((user || {}).user.email);
  return (
      <Dropdown text={(user || {}).user.email} pointing={"right"}>
        <Dropdown.Menu>
          <Dropdown.Item text='Settings'/>
          <Dropdown.Item text='Logout'/>
        </Dropdown.Menu>
      </Dropdown>
  )
}
