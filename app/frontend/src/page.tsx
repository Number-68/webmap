import './style.css';
import { useState } from 'react';
export function Homepage(){
    const [isLoaded, setIsLoading] = useState();
    const [url, setUrl] = useState<string | null>(null);


    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("click hit!: ", url)

        // validate the hit. 


        // handle fetch 

        // process the data from the fetch.
            //apply to a usestate

    }

    return <div className="homepage">
        <h1>Hello World Web Map</h1>
      <p>my name is AJ, today we are having a good time initializing this project.</p>
      <form onSubmit={handleFormSubmission}>
        <input type="text" placeholder='URL' onChange={(e) => setUrl(e.target.value)}/>
        <button type="submit">
            Submit
        </button>
      </form>
       <br />
      <div className="graph-display">

        
    
      </div>
    </div>
}