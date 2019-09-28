import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Button, Container, Header, Image, Menu, Responsive, Segment, Transition, Visibility} from "semantic-ui-react";
import {Link} from "react-router-dom";
import logo from "../incible-logo.png";
import {NavigationItemProps, NavigationItems} from "../util/interfaces";
import {LoggedInDropdown} from "./LoggedInDropdown";

const navigationItems: NavigationItems = [
  {url: "/", label: "Home"},
  {url: "/incidents", label: "Incidents"}
];

export const RightNavigationItem = ({isLoggedIn, fixed}) => {
  if (!isLoggedIn)
    return (<>
      <Menu.Item position='right'>
        <Link to="/login">
          <Button as='div'>
            <Header color="black" size="small">
              Log in
            </Header>
          </Button>
        </Link>
        <Link to="/signup">
          <Button as='div' inverted={!fixed} primary={fixed} style={{marginLeft: '0.5em'}}>
            <Header color="yellow" size="small">
              Sign up
            </Header>
          </Button>
        </Link>
      </Menu.Item>
    </>);
  else {
    return (<Menu.Item position='right'>
      <LoggedInDropdown/>
    </Menu.Item>);
  }
};

export const NavigationItem = (props: NavigationItemProps) => {
  return (
      <Link to={props.url}>
        <Button as='div' inverted={!props.inverted}>
          <Header color="black" size="small">
            {props.label}
          </Header>
        </Button>
      </Link>
  );
};

export const NavigationBar: React.FC = (props) => {

  const [fixed, setFixation] = useState(false);

  const user = useSelector(state => state.user);
  const {isLoggedIn} = user || {};

  return (<Responsive
      // getWidth={getWidth}
      minWidth={Responsive.onlyTablet.minWidth}>
    <Transition visible={true} animation='slide top' duration={500}>
      <Visibility
          once={false}
          onBottomPassed={() => setFixation(true)}
          onBottomPassedReverse={() => setFixation(false)}
      >
        <Segment
            inverted
            textAlign='center'
            vertical
        >
          <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
          >
            <Container>

              <Menu.Item>
                <Link to="/">
                  <Image src={logo} width={30} className="bordered-logo"/>
                </Link>
              </Menu.Item>

              <Menu.Item position='left'>
                {navigationItems.map(navigationItem => (
                    <NavigationItem
                        key={navigationItem.label}
                        inverted={!fixed}
                        url={navigationItem.url}
                        label={navigationItem.label}
                    />
                ))}
                  </Menu.Item>

                  <RightNavigationItem isLoggedIn={isLoggedIn} fixed={fixed} />

                  </Container>
                  </Menu>
                  </Segment>
                  </Visibility>
                  </Transition>
                  </Responsive>
                  );
                };

