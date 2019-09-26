import React, {useEffect, useState} from "react";
import {Button, Grid, Header, Image, Form, Segment, Message, Label, Transition} from "semantic-ui-react";
import logo from "../incible-logo.png";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {signIn} from "../redux/actions/users.action";
import {redirectToHome} from "../util/router.functions";
import {animated, useSpring} from 'react-spring';
import {UserReducerInterface} from "../redux/reducers/user.reducer";
import {getLastIndexItem} from "../util/helper.functions";

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var items = [
  "red",
    "blue",
    "yellow",
    "green"
];

export function Random() {
  return (
      <div style={{
        backgroundColor: items[Math.floor(Math.random()*items.length)],
        position:'absolute',
        height: getRandomInt(10, 50),
        // width: getRandomInt(10, 70)},
        top: getRandomInt(0, 10) + 'vh',
        right: getRandomInt(0, 10) + 'vh',
        borderRadius: getRandomInt(0, 30),
        zIndex: -22
      //
      }}>

      </div>
  )
}

export const Login: React.FC = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const user: UserReducerInterface = useSelector(state => state.user);
  const isLoggedIn = user.isLoggedIn;
  isLoggedIn && redirectToHome(props);
  const dispatch = useDispatch();

  const error = user.error;
  console.log(error);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, [visible]);

  return (
      <Grid textAlign='center' style={{height: '100vh', zIndex: -10}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
          <Transition visible={visible} animation='slide up' duration={500}>
            <Header as='h2' className="tx-purp" textAlign='center'>
              <Image src={logo}/> Log-in to your account
            </Header>
          </Transition>

          {
            error.title && (
              <Message color="red">
                <Message.Header>{error.title}</Message.Header>
                {error.message}
              </Message>
            )
          }

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

                <Button
                    loading={isLoading}
                    className="bg-purp tx-white" fluid size='large'
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                      }, 2000);
                      dispatch(signIn({email, password}))
                    }}>
                  Login
                </Button>
              </Segment>
            </Form>
          </Transition>
            <Message>
              New to us? <Link to='/signup'>Sign Up</Link>
            </Message>
          {/*</Transition>*/}
        </Grid.Column>
      </Grid>
  )
};
