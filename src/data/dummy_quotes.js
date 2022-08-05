import { v4 as uuidv4 } from 'uuid';

export const DUMMY_QUOTES = [{
        id: "0b4a007a-9dbd-4ded-a002-e1ce49664d3a",
        author: 'Test',
        text: 'This is a test!',
        comments: [
            {
                id: uuidv4(),
                text: 'My first comment',
                quoteId: "0b4a007a-9dbd-4ded-a002-e1ce49664d3a"
            },
            {
                id: uuidv4(),
                text: 'The elusive, third comment',
                quoteId: "0b4a007a-9dbd-4ded-a002-e1ce49664d3a"
            }
        ]
    },
    {
        id: "a23f391f-cbd4-4162-9747-72f0085dc78a",
        author: 'Nothile',
        text: 'This is another test',
        comments: [
           {
                id: uuidv4(),
                text: 'Second comment here',
                quoteId: "a23f391f-cbd4-4162-9747-72f0085dc78a"
           }
        ]
    }
];