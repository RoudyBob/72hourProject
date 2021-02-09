import React, {useState, useEffect} from 'react';
const GitJobs = () => {
const [results, setResults] = useState([]);
function fetchResults(){
    
const corsURL= "https://efa-cors-anywhere.herokuapp.com/"
const gitJobURL="https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823"
fetch(corsURL + gitJobURL)
.then((res)=>res.json())
.then((json)=> {
    console.log(json)
    setResults(results=>[])
    console.log(results)
    }
)
}
const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
}
return (
    <div className="main">
        <div className="mainDiv">
            <form onSubmit={(e)=> handleSubmit(e)}>
    <div>{results}</div>
    <button onClick={fetchResults}>Click</button>
    </form>
    </div>
    </div>
)
}
export default GitJobs;