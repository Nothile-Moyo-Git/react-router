import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from '../quotes/HighlightedQuote';
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from '../../lib/api';
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {

    const match = useRouteMatch();

    const params = useParams();

    const { quoteId } = params;

    const { sendRequest, data: loadedQuote, error, status } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    },[sendRequest, quoteId]);

    if (status === 'pending') {
        return(
            <div className="centered">
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return(
            <p className="centered focused">{error}</p>
        );
    }

    if(!loadedQuote.text){
        return(<p>No Quote Found!</p>);
    }

    return(
        <>
            <h1>Quote detail</h1>

            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text}/>

            <Route exact path={match.path}>
                <Link to={`${match.url}/comments`} className="btn">Show Comments</Link>
            </Route>
                       
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </>
    );
};

export default QuoteDetail;