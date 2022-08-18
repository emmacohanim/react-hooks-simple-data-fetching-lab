// create your App component here
import React, { useEffect, useState } from "react";

function App () {

    // initialize state of data and set initial state to null
    const [data, setData] = useState(null)

    useEffect(() => {
        // pass fetch in as first argument to fetch pic from site on first render and update data state
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setData(data.message);
        })
    }, []);

    if (!data) return <p>Loading...</p>
    // if data is false (null is false), render p
    return (
                <img src= {data} alt="A Random Dog" />
                // render image by referencing updated state

        )
    }



export default App