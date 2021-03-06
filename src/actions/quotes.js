
export const addQuote = quote => {
    console.log(`adding quote ${quote.content} by ${quote.author}`)
    return{
        type: "ADD_QUOTE",
        quote: quote
    }
}

export const removeQuote = quoteId => {
    return{
        type: "REMOVE_QUOTE",
        quoteId: quoteId
    }
}

export const upvoteQuote = quoteId => {
    return{
        type: "UPVOTE_QUOTE",
        quoteId: quoteId
    }
}

export const downvoteQuote = quoteId => {
    return{
        type: "DOWNVOTE_QUOTE",
        quoteId: quoteId
    }
}