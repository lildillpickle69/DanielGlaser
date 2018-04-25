import React from 'react';
import { Quote } from '../components';
import quotesjson from '../constants/quotes.json';

// const filePath = '../constants/quotes.json';
// const quotes = $.getJSON(filePath.done());
const quotes = quotesjson.filter(quote => quote.quoteAuthor !== '');
const random = Math.round(Math.random() * quotes.length);
const quote = quotes[random];

const QuoteContainer = () => (
  <Quote quote={quote.quoteText} author={quote.quoteAuthor} />
);

export default QuoteContainer;
