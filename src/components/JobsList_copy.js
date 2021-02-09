import React, {useState, useEffect} from 'react';

// const baseUrl = 'https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823';

 const JobsList = (props) => {
     const [jobs, setJobs] = useState([]);
     const [location, setLocation] = useState('');

 const fetchJobs = () => {
    let corsUrl = 'https://efa-cors-anywhere.herokuapp.com/';
    let baseJobsUrl = 'https://jobs.github.com/positions.json'
    let lat = props.latitude;
    let long = props.longitude;
    let url = (corsUrl + baseJobsUrl + '?lat=' + lat + '&long=' + long);
    //let url = (corsUrl + baseJobsUrl);

    console.log('Here is the url => ', url);
     fetch(url)
        .then((res) => res.json())
        .then((json) => {
            console.log('This is the json' , json)
            setJobs(json);
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchJobs();
    }

        let count = 0;
        let numberOfJobs = 4;

    return ( 
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <p style={{textAlign: 'center'}}>GitHub Jobs API</p>
            <p style={{textAlign: 'center'}}>Find Up to {numberOfJobs} Job Listings Closest to You<br/>
                <button onClick={fetchJobs}>Click Here</button>
            </p>
            {jobs.map(result => {
                if (count < numberOfJobs){
                    count++
                return (
                    <div>
                        {result.company_logo ? <img style={{height: 30 + 'px'}} src={result.company_logo}/> : <></>}
                        
                        <p>Company Name: {result.company}<br/>
                        Location: {result.location}<br/>
                        Position: {result.title}<br/>
                        <a style={{fontWeight: 700}} target='_blank' href={result.url}>Click For Full Job Listing</a></p>
                        {count < numberOfJobs ? <div style={{background: 'white', height: 5 + 'px', marginBottom: 10 + 'px'}}></div> : <></>}

                    </div>
                )
                } else {
                    return('')
                }
                
            })}
            
        </form>
        </>
    )  
}

 
export default JobsList; 