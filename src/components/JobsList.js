import React, {useState} from 'react';

// const baseUrl = 'https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823';

 const JobsList = (props) => {
     
     const [jobs, setJobs] = useState([]);
     console.log('I am here again');

 const fetchJobs = () => {
    console.log('I am here');
    let url = 'https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823'
     fetch(url, {mode: 'no-cors'})
        .then((res) => {
            //setJobs(res)
            console.log(res);
        })
    }
    
    

    return ( 
        <>
        <p>Hello from JobsList! and Susan and Luna</p>
        <button onClick={fetchJobs}>Click Here</button>
        </>
    )  
}

 
export default JobsList;