import React from 'react';
import { Quote, Price } from '../components';
import quotesjson from '../constants/quotes.json';
import { Transition, Container } from 'semantic-ui-react';

// const filePath = '../constants/quotes.json';
// const quotes = $.getJSON(filePath.done());
const quotes = quotesjson.filter(quote => quote.quoteAuthor !== '');
const random = Math.round(Math.random() * quotes.length);
const quote = quotes[random];

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      quotevisible: true,
    };
    this.switchHeader = this.switchHeader.bind(this);
  }
  switchHeader() {
    console.log(this.state.quotevisible);
    setTimeout(() => {
      this.setState(prevState => ({
        quotevisible: !prevState.quotevisible,
      }));
    }, 3000);
  }
  render() {
    return (
      <Container text>
        <Transition visible={this.state.quotevisible} animation="horizontal flip" duration={1000} onComplete={this.switchHeader()} unmountOnHide>
          <Quote quote={quote.quoteText} author={quote.quoteAuthor} />
        </Transition>
        <Transition visible={!this.state.quotevisible} animation="horizontal flip" duration={1000} onComplete={this.switchHeader()} unmountOnHide>
          <Price price={5} change={4} direction="up" />
        </Transition>
      </Container>
    );
  }
}


export default Header;
