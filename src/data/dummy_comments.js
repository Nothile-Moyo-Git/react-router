import { v4 as uuidv4 } from 'uuid';
import { DUMMY_QUOTES } from './dummy_quotes';

export const DUMMY_COMMENTS = [
    {
        id: uuidv4(),
        text: 'My first comment',
        quoteId: DUMMY_QUOTES[0].id
    },{
        id: uuidv4(),
        text: 'Second comment here',
        quoteId: DUMMY_QUOTES[1].id
    },{
        id: uuidv4(),
        text: 'The third, elusive comment',
        quoteId: DUMMY_QUOTES[0].id
    }
];