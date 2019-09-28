import React, {useEffect, useState} from "react";
import {useSpring, animated} from "react-spring";
import {CSSTransition} from "react-transition-group";
import {Message, Button} from "semantic-ui-react";
import '../App.css';

export const AnimatedAlert = (props) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const style = useSpring({
    to: async (next, cancel) => {
      await next({opacity: 1, color: '#ffaaee'})
      await next({opacity: 0, color: 'rgb(14,26,19)'})
    },
    from: {opacity: 0, color: 'red'}
  });

  useEffect(() => {

  }, [showMessage]);
  return (
      <>
        <Button
            onClick={() => setShowMessage(true)}
            size="large"
        >
          Show Message
        </Button>
        {showMessage && (
            <animated.div style={style}>I will fade in and out</animated.div>
        )}
      </>
  )
};
