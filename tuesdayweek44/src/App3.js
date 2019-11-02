import React, { useState, useEffect } from 'react';

export default function App(props) {
    const [joke, setJoke] = useState("");
    const [getJoke, setGetJoke] = useState(false);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => setJoke(data.value))
    },[getJoke]);

    return (
        <div>
            <p>
            <button onClick= {() => {
        setGetJoke(!getJoke);
      }}>Get Chuck Norris Joke!</button>
            </p>
            <p>{joke}</p>
        </div>
    )
}