import React, {useState} from "react";
import {Button, Form, Segment} from "semantic-ui-react";
import {signUp} from "../redux/actions/users.action";
import {useDispatch} from "react-redux";


export function IncidentsCreate() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  return (
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}/>
          <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
          />

          <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
          />

          <Button
              loading={isLoading}
              className="bg-purp tx-white" fluid size='large'
              circular={true}
              onClick={() => {
                dispatch(signUp({email, password, confirmPassword}))
              }}>
            Sign up
          </Button>
        </Segment>
      </Form>
  );
}
