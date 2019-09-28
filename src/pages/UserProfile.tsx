import React, {useState} from "react";
import {Button, Segment, Header, Container, Label, Form} from "semantic-ui-react";

export interface User {

}

export function UserProfile() {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [picture, setPicture] = useState("");

  return (
      <Container className="mh-body" style={{padding: '2em 0em'}}>
        <Segment style={{padding: '2em 2em'}}>
          <Header style={{marginBottom: '2em'}} size="large">Profile</Header>
          <Form>
            <Container>
              <Form.Input label='Name' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
              <Form.Input label='Gender' type='text' value={gender} onChange={(e) => setGender(e.target.value)}/>
              <Form.Input label='Location' type='text' value={location} onChange={(e) => setLocation(e.target.value)}/>
              <Form.Input label='Website' type='text' value={website} onChange={(e) => setWebsite(e.target.value)}/>
            </Container>
          </Form>

        </Segment>
      </Container>
  );
}
