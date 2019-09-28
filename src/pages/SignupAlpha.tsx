import React, {useEffect, useState} from "react";
import {UserReducerInterface} from "../redux/reducers/user.reducer";
import {redirectToHome} from "../util/router.functions";
import {useSelector, useDispatch} from "react-redux";
import {Button, Form, Grid, Header, Image, Message, Segment, Transition} from "semantic-ui-react";
import {signIn, signUp} from "../redux/actions/users.action";
import {Link} from "react-router-dom";

export const SignupAlpha: React.FC = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const user: UserReducerInterface = useSelector(state => state.user);
  const isLoggedIn = user.isLoggedIn;
  isLoggedIn && redirectToHome(props);
  const dispatch = useDispatch();

  const error = user.error;

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, [visible]);

  return (
      <>

          <Transition visible={visible} animation='slide up' duration={500}>
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
          </Transition>
          <Message>
            Already have an account?
            <Link to='/login'>
              <Header size="small">
                Login
              </Header>
            </Link>
          </Message>
        </>
  )
};
