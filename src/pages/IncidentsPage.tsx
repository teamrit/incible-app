import React from "react";
import {Container, Header, Segment, Divider, Grid, Button, Icon, Tab} from "semantic-ui-react";
import {matchPath, Route} from "react-router";
import {NavLink} from "react-router-dom";

const panes = [
  {
    menuItem: {
      as: NavLink,
      content: "Home",
      to: "/incidents",
      exact: true,
      key: "home"
    },
    render: () => (
        <Route path="/incidents/">
          <Tab.Pane>
            <div>Home</div>
          </Tab.Pane>
        </Route>
    )
  },
  {
    menuItem: {
      as: NavLink,
      content: "Authentication",
      to: "/incidents/create",
      key: "auth"
    },
    render: () => (
        <Route path="/incidents/create">
          <Tab.Pane>
            <div>Authentication content here</div>
          </Tab.Pane>
        </Route>
    )
  },
  {
    menuItem: {
      as: NavLink,
      content: "Config Lists",
      to: "/incidents/assignedToMe",
      key: "configs"
    },
    render: () => (
        <Route path="/incidents/assignedToMe">
          <Tab.Pane>
            <div>Config Lists content here</div>
          </Tab.Pane>
        </Route>
    )
  }
];

// Required to get a correct tab opened by default
const defaultActiveIndex = panes.findIndex(pane => {
  return !!matchPath(window.location.pathname, {
    path: pane.menuItem.to,
    exact: true
  });
});

const TabExampleBasic = () => <Tab defaultActiveIndex={defaultActiveIndex} panes={panes} />;

export function IncidentsPage() {
  return (
      <Container style={{padding: '2em 0em'}}>
        <Segment style={{padding: '2em'}}>
          <Grid.Column>
            <TabExampleBasic />
          </Grid.Column>
          <Grid.Column>
            <Header
                content="Incidents"
                size="medium"
            />
            <Button labelPosition='left' icon="plus">
              <Icon name="plus"/>
              Create new
            </Button>
          </Grid.Column>
          <Divider/>
        </Segment>
      </Container>
  );
}
