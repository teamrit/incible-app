import React from "react";
import {Container, Header, Segment, Divider, Grid, Button, Icon} from "semantic-ui-react";

export function IncidentsPage() {
  return (
    <Container style={{padding: '2em 0em'}}>
        <Segment style={{padding: '2em'}}>
      <Grid.Column>
          <Header
              content="Incidents"
              size="medium"
          />
          <Button labelPosition='left' icon="plus">
            <Icon name="plus" />
            Create new
          </Button>
      </Grid.Column>
          <Divider />
        </Segment>


    </Container>
  );
}
