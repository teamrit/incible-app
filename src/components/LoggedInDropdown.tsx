import React, {useState} from "react";
import {Dropdown, Transition} from "semantic-ui-react";
import {useSelector} from "react-redux";

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
          <Dropdown.Item icon="cog" text='Setting'/>
          <Dropdown.Item icon="sign-out" text='Logout'/>
        </Dropdown.Menu>
      </Dropdown>
  )
}
