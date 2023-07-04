import React,{useEffect, useState} from "react";

export default function Quotes(){
    
    const [quotes, setQuotes] = useState(['Quote 1', 'Quote 2', 'Quote 3']);
    const [quote, setQuote] = useState('');

    useEffect (() => {

        const interval = setInterval(() => {

            // Generate random quote from the ones stored in the array
            let min = 0;
            let max = quotes.length - 1;
            let rndIndex = Math.floor(Math.random() * (max-min + 1)) + min;
            setQuote(quotes[rndIndex]);
        },1000);

        //TO stop if we change the component or just close it
        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            {quote}
        </div>
    )
}