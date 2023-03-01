import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomGreeting } from '../redux/greetings';

const Greeting = () => {
  const greetingMessage = useSelector(state => state.greeting);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomGreeting())
  }, [dispatch]);

  return (

    <h1>{greetingMessage}</h1>
  );

};

export default Greeting;