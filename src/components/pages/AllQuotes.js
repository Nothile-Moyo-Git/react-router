import QuoteList from "../quotes/QuoteList";
import useHttp from "../../hooks/use-http";
import { quotesManager } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from '../UI/LoadingSpinner';
import NoQuotesFound from "../quotes/NoQuotesFound";

const AllQuotes = (props) => {

    const { sendRequest, status, data: quotes, error } = useHttp(quotesManager, true);

    useEffect(() => {
        sendRequest({method: 'fetch'});
    },[sendRequest]);

    const updateQuotesHandler = (quoteId) => {
        sendRequest({method: 'delete', quoteId: quoteId});
    }; 

    if (status === 'pending') {
        return(
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (status === 'error') {
        return (
            <p className="centered focused">{error}</p>
        );   
    }

    if (status === 'completed' && (!quotes || quotes.length === 0)) {
        return(
            <NoQuotesFound/>
        );
    }

    return(
        <QuoteList quotes={quotes} updateQuotes={updateQuotesHandler}/>
    );
    
};

export default AllQuotes;