import React, {useState} from "react";
import {Dropdown, Header, Icon, Transition} from "semantic-ui-react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export function DropdownItem ({icon, to, color, label}) {
  // TODO: No hover effects!
  return (
        <Link to={to}>
      <Dropdown.Item>
          <Icon name={icon} color="black"/>
          <span className="text" style={{color:'black'}}>{label}</span>
      </Dropdown.Item>
        </Link>
  )
}

export function LoggedInDropdown() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const user = useSelector(state => state.user);

  return (
      <Dropdown text={(user || {}).user.email} pointing={"top left"}
                onClick={(isDropdownVisible) => {
                  console.log("soemthing");
                  setDropdownVisibility(!isDropdownVisible)
                }}>
        <Dropdown.Menu>
          <Transition animation={"scale"} visible={isDropdownVisible}>
            <Dropdown.Item icon="cog">
              Settings
            </Dropdown.Item>
          </Transition>

          <DropdownItem
            to={"/profile"}
            icon={"user"}
            color={"black"}
            label={"My Profile"}
          />

          <DropdownItem
              to={"/settings"}
              icon={"cog"}
              color={"black"}
              label={"Settings"}
          />

          <DropdownItem
              to={"/sign-out"}
              icon={"sign-out"}
              color={"black"}
              label={"Logout"}
          />
        </Dropdown.Menu>
      </Dropdown>
  )
}
