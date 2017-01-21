import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './src/containers/App'

const Home = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/Home').default)
  }, 'home')
};

const Contact = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/Contact').default)
  }, 'contact')
};

const NotFound = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/NotFound').default)
  }, 'notFound')
};

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute getComponent={Home} />
      <Route path="/home" getComponent={Home} />
      <Route path="/contact" getComponent={Contact} />
      <Route path="*" getComponent={NotFound} />
    </Route>
  </Route>
)
