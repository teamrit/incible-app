import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container, Grid, Header, Image, Message, Segment, Transition} from "semantic-ui-react";
import {get} from 'lodash';
import {SignupAlpha} from "./SignupAlpha";
import {SignUpBeta} from "./SignupBeta";
import {SignUpGamma} from "./SignUpGamma";
import logo from "../incible-logo.png";
import {animated, useSpring, useTransition} from "react-spring";
import {UserReducerInterface} from "../redux/reducers/user.reducer";
import {redirectToHome} from "../util/router.functions";

export const SignUpStag = {
  alpha: "alpha",
  beta: "beta",
  gamma: "gamma"
};

export function getStageNumber(stage) {
  switch (stage) {
    case SignUpStag.alpha:
      return 1;
    case SignUpStag.beta:
      return 2;
    case SignUpStag.gamma:
      return 3;
    default:
      return 1;
  }
}

export const SignupStage = ({stage}) => {
  switch (stage) {
    case SignUpStag.alpha:
      return <SignupAlpha/>;
    case SignUpStag.beta:
      return <SignUpBeta/>;
    case SignUpStag.gamma:
      return <SignUpGamma/>;
    default:
      return <SignupAlpha/>;
  }
};

export function SignupStep({current = 1, stage = 1}) {
  return (
      <Grid.Column>
        <Segment style={{marginBottom:'1em'}} className={current === stage ? "tx-white bg-purp animate scale" : ""}>
          <Header size="large" color={current === stage ? "yellow" : "black"}>
            {stage}
          </Header>
        </Segment>
      </Grid.Column>
  );
}

export function Signup(props) {
  const [visible, setVisible] = useState(false);

  const user: UserReducerInterface = useSelector(state => state.user);
  const dispatch = useDispatch();
  const error = user.error;

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, [visible]);

  const stage = get(props, 'match.params.stage');
  let numberStage = getStageNumber(stage);
  return (
      <Container>
        <Grid textAlign='center' className="mh-body" verticalAlign='middle'>
          <Grid.Column style={{maxWidth: 450}}>
            <Transition visible={visible} animation='scale' duration={500}>
              <Header as='h2' className="tx-purp" textAlign='center'>
                <Image src={logo}/><br/>
                Sign up for an account
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
            <Transition visible={visible} animation='scale' duration={500}>
              <Grid columns={3}>
                <Grid.Row>
                  <SignupStep current={numberStage} stage={1} />
                  <SignupStep current={numberStage} stage={2} />
                  <SignupStep current={numberStage} stage={3} />
                </Grid.Row>
              </Grid>
            </Transition>
            <SignupStage stage={stage}/>
          </Grid.Column>
        </Grid>
      </Container>
  )
}
