const FIREBASE_DOMAIN = 'https://react-router-f7386-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };
    transformedComments.push(commentObj);
  }

  return transformedComments;
}

export async function deleteComment({commentId, quoteId}) {

  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}/${commentId}.json`,{
    method: 'DELETE',
    header: {
      'Content-type': 'application/json'
    }
  });

  if(!response.ok){
    console.log('Something went wrong');
  }

  const update = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const data = await update.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };
    transformedComments.push(commentObj);
  }

  return transformedComments;

}

export async function quotesManager({method, quoteId}) {

  if (method === 'fetch') {

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }
  
    const transformedQuotes = [];
  
    for (const key in data) {
      const quoteObj = {
        id: key,
        ...data[key],
      };
  
      transformedQuotes.push(quoteObj);
    }
  
    return transformedQuotes;
  }

  if (method === 'delete') {
    
    // First we perform an API request to delete our quote based on the ID
    const deleteQuotes = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`,{
      method: 'DELETE',
      header: {
        'Content-type': 'application/json'
      }
    });  

    // If our quote deletion fails
    if (!deleteQuotes.ok) {
      throw new Error(`Entry ${quoteId} could not be deleted, there was an error`);
    }

    // Now we perform our second API request to delete the comments based on the quote ID
    const deleteComments = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`,{
      method: 'DELETE',
      header: {
        'Content-type': 'application/json'
      }
    });

    // If our comment deletion fails
    if (!deleteComments.ok) {
      throw new Error(`Comment ${quoteId} could not be deleted, there was an error`);
    }

    const quotes = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);

    const data = await quotes.json();
  
    if (!quotes.ok) {
      throw new Error(data.message || 'Could not fetch quotes.');
    }
  
    const transformedQuotes = [];
  
    for (const key in data) {
      const quoteObj = {
        id: key,
        ...data[key],
      };
  
      transformedQuotes.push(quoteObj);

    }

    return transformedQuotes;

  }

  throw new Error(`Error: Api call cannot be resolved. Please check any calls to 'quotesManager()'`);

}
