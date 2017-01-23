import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './src/containers/App'
const Home = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/Home').default)
  }, 'home')
};

const AboutUs = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/AboutTeam').default)
  }, 'about')
};

const ServerIntro = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/ServerIntro').default)
  }, 'serverintro')
};
const ServerCategy = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/ServerCategy').default)
  }, 'servercategy')
};
const ServerContact = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/ServerContact').default)
  }, 'servercontact')
};
const Tool = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/Tool').default)
  }, 'tool')
};
const ItemDetail = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/ItemDetail').default)
  }, 'detail')
};
const Rule = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./src/components/Rule').default)
  }, 'rule')
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
      <Route path="/about" getComponent={AboutUs} />
      <Route path="/serverintro" getComponent={ServerIntro} />
      <Route path="/servercategy" getComponent={ServerCategy} />
      <Route path="/servercontact" getComponent={ServerContact} />
      <Route path="/tool" getComponent={Tool} />
      <Route path="/detail" getComponent={ItemDetail} />
      <Route path="/rule" getComponent={Rule} />
      <Route path="*" getComponent={NotFound} />
    </Route>
  </Route>
)
