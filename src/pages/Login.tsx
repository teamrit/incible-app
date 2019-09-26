import React, {useState} from "react";
import {Button, Grid, Header, Image, Form, Segment, Message, Label} from "semantic-ui-react";
import logo from "../incible-logo.png";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {signIn} from "../redux/actions/users.action";
import {redirectToHome} from "../util/router.functions";

export const Login: React.FC = (props) => {

  // const {history} = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const user = useSelector(state => state.user);
  const isLoggedIn = user.isLoggedIn;
  isLoggedIn && redirectToHome(props);
  const dispatch = useDispatch();

  return (
      <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={logo}/> Log-in to your account
          </Header>
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

              <Button
                  loading={isLoading}
                  className="bg-purp tx-white" fluid size='large'
                  onClick={() => {
                    setLoading(true);
                    dispatch(signIn({email, password}))
                  }}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/signup'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
  )
};
