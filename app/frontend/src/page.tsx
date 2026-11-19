import './style.css';
import { useState } from 'react';



const API_URL = import.meta.env.VITE_BACKEND_API;


async function apiFetch(url:string){
     try{
            console.log(API_URL)
            console.log("url: ", url)
            const graphResult = await fetch(`${API_URL}/crawlPage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: url,
                }),
            });
            return await graphResult.json();
        }
        catch (err){
            console.log(err);
        }
}

export function Homepage(){
    const [isLoaded, setIsLoading] = useState();
    const [url, setUrl] = useState<string | null>(null);


    const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // validate the hit. 
        if(!url) {
            console.log("Fill the url");
            return
        }
        // validating the URL. 
        // how woudl you validate the URL.

        // handle fetch 
        const result = await apiFetch(url as string)

        // process the data from the fetch.
            //apply to a usestate

            console.log(result)
       
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