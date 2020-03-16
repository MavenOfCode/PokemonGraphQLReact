import React from 'react';
import ReactDOM from 'react-dom';
import {
	ApolloClient
} from 'apollo-client';
import {
	InMemoryCache
} from 'apollo-cache-inmemory';
import {
	HttpLink
} from 'apollo-link-http';
import {
	ApolloProvider
} from '@apollo/react-hooks';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'https://graphql-pokemon.now.sh/'
})

const client = new ApolloClient({
	cache,
	link
})

// ApolloProvider places the client in context and allows access from anywhere in the app
// and connects client to the app

ReactDOM.render( <ApolloProvider client = {client}> <App /> </ApolloProvider>, document.getElementById('root'));

		serviceWorker.unregister();