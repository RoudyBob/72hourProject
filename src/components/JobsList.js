import React,{useState} from 'react';

const JobsList = (props) => {

    const [jobs, setJobs] = useState('');

    const fetchJobs = () => {
        let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823`;

        fetch (url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        })
        .then((res) => {
            console.log(res)
        })
    }

    return ( 
        <>
        <p>Hello from JobsList!</p>
        <button onClick={fetchJobs}>click me</button>
        </>
     );
}
 
export default JobsList;