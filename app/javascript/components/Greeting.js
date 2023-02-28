import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greet, setGreet] = useState('')
  useEffect(() => {
    const fetchGreet = async () => {
      const response = await fetch("http://127.0.0.1:5000/api/greetings/surprise_greeting")
      const fetchedGreet = await response.json()

      setGreet(fetchedGreet)
    }

    fetchGreet()
  }, [])
  return (

    <h1>{greet.text}</h1>
  );

};

export default Greeting;