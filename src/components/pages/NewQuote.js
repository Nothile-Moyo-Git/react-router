import QuoteForm from '../quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import useHttp from '../../hooks/use-http'
import { addQuote } from '../../lib/api';

const NewQuote = (props) => {

    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    },[status, history]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };

    return(
        <>
            <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
        </>
    );
};

export default NewQuote;